import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

function Dashboard() {
  return (
    <main className="flex-1 p-8 bg-background">
      <h2 className="text-3xl font-playfair font-bold text-bem-dark mb-6">Bem-vindo ao Portal do Distribuidor!</h2>
      <p className="text-lg text-bem-dark/80 mb-8">
        Aqui você encontrará todos os materiais e ferramentas necessários para impulsionar suas vendas e gerenciar sua parceria com a Bem Beauty Professional.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="text-bem-caramel">Documentos Essenciais</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-bem-dark/70">Acesse propostas, manuais, FAQs e guias de negociação.</p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="text-bem-caramel">Treinamentos Exclusivos</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-bem-dark/70">Vídeos e materiais para capacitar sua equipe e cabeleireiros.</p>
          </CardContent>
        </Card>

        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="text-bem-caramel">Material de Marketing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-bem-dark/70">Imagens, vídeos e templates para suas campanhas.</p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

export default Dashboard;


