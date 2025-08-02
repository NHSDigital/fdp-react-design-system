/**
 * Demo showcasing Phase 4 Advanced Semantic Token Relationships
 * 
 * This demonstrates how our calculated token system creates
 * intelligent relationships between tokens for consistent theming.
 */

// Import the generated semantic tokens
import { 
  SemanticIntentPrimary,
  SemanticIntentHoverPrimary, 
  SemanticIntentActivePrimary,
  SemanticIntentLightPrimary,
  SemanticContextFormBorderDefault,
  SemanticContextFormBorderFocus,
  SemanticContextFormTextPlaceholder
} from '../packages/nhs-fdp/dist/typescript/semantic-calculated';

export const CalculatedTokenDemo = () => {
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>🎨 Phase 4: Advanced Semantic Token Relationships</h1>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Intent-Based Color Relationships</h2>
        <p>These colors are mathematically related - hover and active states are automatically calculated:</p>
        
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
          <div style={{
            backgroundColor: SemanticIntentPrimary,
            color: 'white',
            padding: '0.5rem 1rem',
            borderRadius: '4px'
          }}>
            Primary: {SemanticIntentPrimary}
          </div>
          
          <div style={{
            backgroundColor: SemanticIntentHoverPrimary,
            color: 'white', 
            padding: '0.5rem 1rem',
            borderRadius: '4px'
          }}>
            Hover: {SemanticIntentHoverPrimary}
          </div>
          
          <div style={{
            backgroundColor: SemanticIntentActivePrimary,
            color: 'white',
            padding: '0.5rem 1rem', 
            borderRadius: '4px'
          }}>
            Active: {SemanticIntentActivePrimary}
          </div>
          
          <div style={{
            backgroundColor: SemanticIntentLightPrimary,
            color: SemanticIntentPrimary,
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            border: `1px solid ${SemanticIntentPrimary}`
          }}>
            Light: {SemanticIntentLightPrimary}
          </div>
        </div>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Contextual Form Tokens</h2>
        <p>Form tokens that understand their semantic context and relationships:</p>
        
        <div style={{ maxWidth: '300px' }}>
          <label style={{ 
            display: 'block', 
            marginBottom: '0.5rem',
            fontWeight: 'bold'
          }}>
            Example Form Field
          </label>
          
          <input 
            type="text"
            placeholder="Calculated placeholder opacity"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: `2px solid ${SemanticContextFormBorderDefault}`,
              borderRadius: '4px',
              fontSize: '1rem',
              transition: 'border-color 0.2s ease'
            }}
            onFocus={(e) => {
              e.target.style.borderColor = SemanticContextFormBorderFocus;
            }}
            onBlur={(e) => {
              e.target.style.borderColor = SemanticContextFormBorderDefault;
            }}
          />
          
          <div style={{ marginTop: '0.5rem', fontSize: '0.875rem', color: '#666' }}>
            <p>Default border: {SemanticContextFormBorderDefault}</p>
            <p>Focus border: {SemanticContextFormBorderFocus}</p>
            <p>Placeholder uses calculated opacity: {SemanticContextFormTextPlaceholder}</p>
          </div>
        </div>
      </section>

      <section>
        <h2>🎯 Key Achievements</h2>
        <ul style={{ lineHeight: '1.6' }}>
          <li><strong>Semantic Intent System</strong>: Colors express meaning, not just appearance</li>
          <li><strong>Calculated Relationships</strong>: Hover/active states derived mathematically</li>
          <li><strong>Contextual Awareness</strong>: Tokens understand their usage context</li>
          <li><strong>Consistent Theming</strong>: Related tokens maintain visual harmony</li>
          <li><strong>Developer Experience</strong>: TypeScript tokens with semantic names</li>
        </ul>
      </section>
    </div>
  );
};
