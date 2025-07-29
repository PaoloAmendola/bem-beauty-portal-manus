import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Download, FileText, Eye } from 'lucide-react';

function Documentos() {
  const documentos = [
    {
      titulo: "Proposta Comercial Oficial",
      descricao: "Documento mestre para negociações com distribuidores",
      tipo: "PDF",
      tamanho: "2.5 MB",
      url: "/proposta_comercial_oficial.pdf"
    },
    {
      titulo: "Manual de Boas-Vindas ao Distribuidor",
      descricao: "Onboarding completo para novos parceiros",
      tipo: "PDF",
      tamanho: "1.8 MB",
      url: "/manual_boas_vindas_distribuidor.pdf"
    },
    {
      titulo: "FAQ para Distribuidores",
      descricao: "Respostas para dúvidas comuns dos distribuidores",
      tipo: "PDF",
      tamanho: "1.2 MB",
      url: "/faq_distribuidores.pdf"
    },
    {
      titulo: "Guia de Negociação e Quebra de Objeções",
      descricao: "Técnicas de vendas e argumentos para superar objeções",
      tipo: "PDF",
      tamanho: "2.1 MB",
      url: "/guia_negociacao_objecoes.pdf"
    },
    {
      titulo: "Kit de Onboarding",
      descricao: "Primeiros 90 dias estruturados para novos distribuidores",
      tipo: "PDF",
      tamanho: "1.9 MB",
      url: "/kit_onboarding_distribuidor.pdf"
    },
    {
      titulo: "Scripts de Vendas",
      descricao: "Abordagens testadas e eficazes para diferentes perfis",
      tipo: "PDF",
      tamanho: "1.5 MB",
      url: "/scripts_vendas_distribuidores.pdf"
    }
  ];

  return (
    <main className="flex-1 p-8 bg-background">
      <h2 className="text-3xl font-playfair font-bold text-bem-dark mb-6">Documentos Essenciais</h2>
      <p className="text-lg text-bem-dark/80 mb-8">
        Acesse todos os documentos necessários para suas negociações e gestão da parceria.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documentos.map((doc, index) => (
          <Card key={index} className="hover-lift">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <FileText className="h-8 w-8 text-bem-caramel" />
                  <div>
                    <CardTitle className="text-bem-dark text-lg">{doc.titulo}</CardTitle>
                    <p className="text-sm text-bem-dark/60">{doc.tipo} • {doc.tamanho}</p>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-bem-dark/70 mb-4">{doc.descricao}</p>
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="bg-bem-caramel hover:bg-bem-caramel/90 text-bem-cream"
                  onClick={() => window.open(doc.url, '_blank')}
                >
                  <Eye className="mr-2 h-4 w-4" /> Visualizar
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-bem-caramel text-bem-caramel hover:bg-bem-caramel hover:text-bem-cream"
                >
                  <Download className="mr-2 h-4 w-4" /> Download
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default Documentos;

