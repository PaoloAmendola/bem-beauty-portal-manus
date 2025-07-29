import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Play, Trophy, Users, Target } from 'lucide-react';

function Treinamentos() {
  const treinamentos = [
    {
      titulo: "Desvendando o NIVELA",
      descricao: "Compreenda a fundo o produto, seus diferenciais e benefícios",
      duracao: "15 min",
      nivel: "Básico",
      publico: "Todos os perfis",
      icone: Target,
      cor: "text-green-600"
    },
    {
      titulo: "Venda Consultiva para Cabeleireiros",
      descricao: "Desenvolva habilidades para vender o NIVELA diretamente ao cabeleireiro",
      duracao: "20 min",
      nivel: "Intermediário",
      publico: "Equipe de vendas e distribuidores",
      icone: Users,
      cor: "text-blue-600"
    },
    {
      titulo: "Estratégias para Donos de Salão",
      descricao: "Abordagem específica para cabeleireiros que são donos do próprio salão",
      duracao: "18 min",
      nivel: "Intermediário",
      publico: "Equipe de vendas e distribuidores",
      icone: Trophy,
      cor: "text-purple-600"
    },
    {
      titulo: "Fortalecendo Parcerias com Distribuidores",
      descricao: "Técnicas para construir relacionamentos duradouros e produtivos",
      duracao: "25 min",
      nivel: "Avançado",
      publico: "Equipe interna",
      icone: Target,
      cor: "text-orange-600"
    }
  ];

  return (
    <main className="flex-1 p-8 bg-background">
      <h2 className="text-3xl font-playfair font-bold text-bem-dark mb-6">Treinamentos Gamificados</h2>
      <p className="text-lg text-bem-dark/80 mb-8">
        Módulos curtos e objetivos, focados em ações práticas para cada perfil de público.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {treinamentos.map((treinamento, index) => {
          const IconeComponent = treinamento.icone;
          return (
            <Card key={index} className="hover-lift">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <IconeComponent className={`h-8 w-8 ${treinamento.cor}`} />
                    <div>
                      <CardTitle className="text-bem-dark text-lg">{treinamento.titulo}</CardTitle>
                      <p className="text-sm text-bem-dark/60">{treinamento.duracao} • {treinamento.nivel}</p>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-bem-dark/70 mb-3">{treinamento.descricao}</p>
                <div className="mb-4">
                  <span className="inline-block bg-bem-blue-light/20 text-bem-dark text-xs px-2 py-1 rounded-full">
                    {treinamento.publico}
                  </span>
                </div>
                <Button 
                  className="w-full bg-bem-caramel hover:bg-bem-caramel/90 text-bem-cream"
                >
                  <Play className="mr-2 h-4 w-4" /> Iniciar Treinamento
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-8 p-6 bg-bem-cream rounded-lg">
        <h3 className="text-xl font-playfair font-bold text-bem-dark mb-4">Sistema de Gamificação</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center">
            <Trophy className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
            <h4 className="font-semibold text-bem-dark">Conquistas</h4>
            <p className="text-sm text-bem-dark/70">Desbloqueie medalhas ao completar módulos</p>
          </div>
          <div className="text-center">
            <Target className="h-8 w-8 text-green-500 mx-auto mb-2" />
            <h4 className="font-semibold text-bem-dark">Desafios</h4>
            <p className="text-sm text-bem-dark/70">Cenários práticos para aplicar o conhecimento</p>
          </div>
          <div className="text-center">
            <Users className="h-8 w-8 text-blue-500 mx-auto mb-2" />
            <h4 className="font-semibold text-bem-dark">Ranking</h4>
            <p className="text-sm text-bem-dark/70">Compare seu progresso com outros distribuidores</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Treinamentos;

