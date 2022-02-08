import { InlineMath, BlockMath } from 'react-katex';

export const VecI = () => <InlineMath math={'\\vec{\\imath}'} />;
export const VecJ = () => <InlineMath math={'\\vec{\\jmath}'} />;
export const LaTeX = () => <InlineMath math={'\\LaTeX'} />;
export const BaselFormula = () => 
	<BlockMath  math={'\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}'} />;
