import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Smartphone, Users, GraduationCap, Bot, ExternalLink } from 'lucide-react';

function BemTech() {
  const apps = [
    {
      nome: "BemPRO",
      publico: "Cabeleireiros",
      descricao: "Consultor de bolso que acompanha o profissional no dia a dia, oferecendo suporte técnico, comercial e de marketing.",
      icone: Smartphone,
      cor: "text-blue-600",
      bgCor: "bg-blue-50",
      funcionalidades: [
        "Calculadora de custo por aplicação",
        "Guias técnicos de aplicação",
        "Dicas de marketing para salões",
        "Suporte técnico 24/7",
        "Histórico de vendas e comissões"
      ]
    },
    {
      nome: "BemHUB",
      publico: "Distribuidores",
      descricao: "Centro de comando completo com todos os materiais, onboarding digital, assinatura de contratos e ferramentas para operar com autonomia total.",
      icone: Users,
      cor: "text-green-600",
      bgCor: "bg-green-50",
      funcionalidades: [
        "Onboarding digital completo",
        "Assinatura eletrônica de contratos",
        "Central de materiais de vendas",
        "Dashboard de performance",
        "Gestão de equipe e território"
      ]
    },
    {
      nome: "BemEDUCA",
      publico: "Equipe de Vendas",
      descricao: "Treinamentos segmentados por perfil de cliente, técnicas de vendas específicas e conhecimento detalhado do NIVELA.",
      icone: GraduationCap,
      cor: "text-purple-600",
      bgCor: "bg-purple-50",
      funcionalidades: [
        "Treinamentos por perfil de cliente",
        "Simuladores de vendas",
        "Biblioteca de objeções e respostas",
        "Certificações e badges",
        "Acompanhamento de progresso"
      ]
    }
  ];

  return (
    <main className="flex-1 p-8 bg-background">
      <div className="mb-8">
        <h2 className="text-3xl font-playfair font-bold text-bem-dark mb-4">Ecossistema BemTech™</h2>
        <p className="text-lg text-bem-dark/80 mb-6">
          Um bônus exclusivo para quem adquire o NIVELA: três aplicativos integrados com IA para apoiar toda a cadeia de valor.
        </p>
        
        <div className="bg-bem-cream p-6 rounded-lg mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Bot className="h-8 w-8 text-bem-caramel" />
            <div>
              <h3 className="text-xl font-playfair font-bold text-bem-dark">BemBOT™ - IA Integrada</h3>
              <p className="text-bem-dark/70">Assistente inteligente presente em todos os apps, oferecendo suporte personalizado e respostas rápidas.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {apps.map((app, index) => {
          const IconeComponent = app.icone;
          return (
            <Card key={index} className="hover-lift h-full">
              <CardHeader className={`${app.bgCor} rounded-t-lg`}>
                <div className="flex items-center gap-3">
                  <IconeComponent className={`h-10 w-10 ${app.cor}`} />
                  <div>
                    <CardTitle className="text-bem-dark text-xl">{app.nome}™</CardTitle>
                    <p className="text-sm text-bem-dark/70 font-medium">{app.publico}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-bem-dark/80 mb-4">{app.descricao}</p>
                
                <h4 className="font-semibold text-bem-dark mb-3">Principais Funcionalidades:</h4>
                <ul className="space-y-2 mb-6">
                  {app.funcionalidades.map((func, idx) => (
                    <li key={idx} className="text-sm text-bem-dark/70 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-bem-caramel rounded-full mt-2 flex-shrink-0"></span>
                      {func}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className="w-full bg-bem-caramel hover:bg-bem-caramel/90 text-bem-cream"
                  disabled
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> 
                  Em Breve
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-bem-caramel to-bem-caramel/80 text-bem-cream p-8 rounded-lg">
        <h3 className="text-2xl font-playfair font-bold mb-4">Diferencial Competitivo Único</h3>
        <p className="text-lg mb-6">
          O BemTech™ não é apenas um conjunto de aplicativos - é um ecossistema completo que transforma a experiência de trabalhar com o NIVELA, oferecendo suporte inteligente e personalizado para cada etapa do processo.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <h4 className="font-semibold mb-2">Integração Total</h4>
            <p className="text-sm opacity-90">Todos os apps se comunicam entre si, criando uma experiência unificada.</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-2">IA Personalizada</h4>
            <p className="text-sm opacity-90">BemBOT™ aprende com cada interação, oferecendo suporte cada vez mais preciso.</p>
          </div>
          <div className="text-center">
            <h4 className="font-semibold mb-2">Atualizações Constantes</h4>
            <p className="text-sm opacity-90">Novas funcionalidades e melhorias são adicionadas regularmente.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default BemTech;

