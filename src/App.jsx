import React, { useState, useEffect } from 'react';
import './App.css';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Home, Book, FileText, Video, Users, Settings, LogOut, Smartphone } from 'lucide-react';
import { supabase } from './lib/supabaseClient';

// Import components
import Dashboard from './components/Dashboard';
import Documentos from './components/Documentos';
import Treinamentos from './components/Treinamentos';
import BemTech from './components/BemTech';

// Import images
import logoImage from './assets/semfundocompleta.png';

function App() {
  const [session, setSession] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeSection, setActiveSection] = useState('dashboard');

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'documentos':
        return <Documentos />;
      case 'treinamentos':
        return <Treinamentos />;
      case 'bemtech':
        return <BemTech />;
      default:
        return <Dashboard />;
    }
  };

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bem-cream font-montserrat">
        <Card className="w-full max-w-md p-8 shadow-lg">
          <CardHeader className="text-center mb-6">
            <img src={logoImage} alt="Bem Beauty Professional" className="h-16 mx-auto mb-4" />
            <CardTitle className="text-3xl font-playfair font-bold text-bem-dark">Login no Portal do Distribuidor</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-bem-dark mb-2">E-mail</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 border border-bem-blue-light rounded-md focus:ring-2 focus:ring-bem-caramel focus:border-transparent"
                  placeholder="seu@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-bem-dark mb-2">Senha</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-3 border border-bem-blue-light rounded-md focus:ring-2 focus:ring-bem-caramel focus:border-transparent"
                  placeholder="Sua senha"
                  required
                />
              </div>
              {error && <p className="text-red-500 text-sm text-center">{error}</p>}
              <Button type="submit" className="w-full bg-bem-caramel hover:bg-bem-caramel/90 text-bem-cream p-3 rounded-md" disabled={loading}>
                {loading ? 'Carregando...' : 'Entrar'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background font-montserrat">
      {/* Header */}
      <header className="bg-bem-dark text-bem-cream py-4 px-6 flex justify-between items-center shadow-md">
        <div className="flex items-center gap-4">
          <img src={logoImage} alt="Bem Beauty Professional" className="h-10 w-auto" />
          <h1 className="text-2xl font-playfair font-bold">Portal do Distribuidor</h1>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" className="text-bem-cream hover:bg-bem-blue-dark/50">
            <Settings className="mr-2 h-5 w-5" /> Configurações
          </Button>
          <Button variant="ghost" className="text-bem-cream hover:bg-bem-blue-dark/50" onClick={handleLogout} disabled={loading}>
            <LogOut className="mr-2 h-5 w-5" /> {loading ? 'Saindo...' : 'Sair'}
          </Button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar Navigation */}
        <aside className="w-64 bg-bem-cream text-bem-dark p-6 shadow-lg">
          <nav className="space-y-2">
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-bem-dark hover:bg-bem-blue-light/50 ${activeSection === 'dashboard' ? 'bg-bem-blue-light/30' : ''}`}
              onClick={() => setActiveSection('dashboard')}
            >
              <Home className="mr-2 h-5 w-5" /> Dashboard
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-bem-dark hover:bg-bem-blue-light/50 ${activeSection === 'documentos' ? 'bg-bem-blue-light/30' : ''}`}
              onClick={() => setActiveSection('documentos')}
            >
              <FileText className="mr-2 h-5 w-5" /> Documentos
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-bem-dark hover:bg-bem-blue-light/50 ${activeSection === 'treinamentos' ? 'bg-bem-blue-light/30' : ''}`}
              onClick={() => setActiveSection('treinamentos')}
            >
              <Video className="mr-2 h-5 w-5" /> Treinamentos
            </Button>
            <Button 
              variant="ghost" 
              className={`w-full justify-start text-bem-dark hover:bg-bem-blue-light/50 ${activeSection === 'bemtech' ? 'bg-bem-blue-light/30' : ''}`}
              onClick={() => setActiveSection('bemtech')}
            >
              <Smartphone className="mr-2 h-5 w-5" /> BemTech™
            </Button>
            <Button variant="ghost" className="w-full justify-start text-bem-dark hover:bg-bem-blue-light/50">
              <Book className="mr-2 h-5 w-5" /> Guia do Produto
            </Button>
          </nav>
        </aside>

        {/* Content Area */}
        {renderContent()}
      </div>

      {/* Footer */}
      <footer className="bg-bem-dark text-bem-cream py-6 text-center text-sm shadow-inner">
        <p>&copy; 2025 Bem Beauty Professional. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}

export default App;

