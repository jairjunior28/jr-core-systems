
import React from 'react';
import { Section } from '../UI/Section';
import { Card } from '../UI/Card';
import { PRODUCTS } from '../../constants';

export const Products: React.FC = () => {
  return (
    <Section 
      id="products" 
      title="Arquitetura de Produtos" 
      subtitle="Tudo nasce do CORE. Nossas soluções são modulares, integradas e prontas para escalar seu negócio."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRODUCTS.map((product) => (
          <Card key={product.id} className="group">
            <div className="mb-6 inline-flex p-3 rounded-xl bg-blue-500/10 text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
              {product.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {product.name}
            </h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              {product.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {product.tags?.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
};
