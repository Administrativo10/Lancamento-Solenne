'use client';

import type { ComponentProps, ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export function Footer() {
    return (
        <footer className="relative w-full border-t border-white/10 bg-black py-12 overflow-hidden">
            {/* Background Effect */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,211,102,0.03),transparent_50%)]" />

            <div className="bg-gradient-to-r from-transparent via-white/5 to-transparent absolute top-0 right-1/2 left-1/2 h-px w-2/3 -translate-x-1/2 rounded-full blur-[1px]" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center justify-center text-center gap-6">
                <AnimatedContainer className="space-y-6">
                    <div className="flex flex-col items-center gap-3">
                        <h4 className="text-lg font-light tracking-wide text-white">Arthur Henrique Gomes</h4>

                        {/* CRECI Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mx-auto transition-transform hover:scale-105 duration-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                            <span className="text-xs font-medium text-white/80 tracking-wider">CRECI-SC 71994F</span>
                        </div>
                    </div>

                    <div className="text-white/40 text-xs max-w-2xl mx-auto leading-relaxed space-y-4">
                        <p>
                            Atuação pautada na ética, segurança jurídica e conformidade com a Lei de Incorporação Imobiliária (Lei 4.591/64).
                        </p>
                        <p>
                            © {new Date().getFullYear()} Arthur Henrique Gomes. Todos os direitos reservados.
                            <br />
                            As imagens e perspectivas artísticas apresentadas são meramente ilustrativas. Acabamentos, móveis e equipamentos serão entregues conforme o Memorial Descritivo do empreendimento.
                            Valores e condições de pagamento estão sujeitos a alteração e correções monetárias conforme tabelas vigentes.
                        </p>
                    </div>
                </AnimatedContainer>
            </div>
        </footer>
    );
};

type ViewAnimationProps = {
    delay?: number;
    className?: ComponentProps<typeof motion.div>['className'];
    children: ReactNode;
};

function AnimatedContainer({ className, delay = 0.1, children }: ViewAnimationProps) {
    const shouldReduceMotion = useReducedMotion();

    if (shouldReduceMotion) {
        return <div className={className}>{children}</div>;
    }

    return (
        <motion.div
            initial={{ filter: 'blur(4px)', translateY: 10, opacity: 0 }}
            whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.8 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};
