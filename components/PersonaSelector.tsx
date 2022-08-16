import {ChangeEvent, FunctionComponent, useCallback} from 'react';
import {useCroct, useEvaluation} from '@croct/plug-react';

type Persona = 'marketer' | 'developer' | 'growth-hacker' | 'default';

const PersonaSelector: FunctionComponent = ReactElement => {
    const croct = useCroct();
    const persona = useEvaluation<Persona|null>("user's persona or else 'default'", {
        initial: null,
        fallback: 'default',
    });

    const setPersona = useCallback(
        () => croct.user.edit()
            .set('custom.persona', 'default')
            .save(),
        [croct],
    );

    return (
        <div className="persona-selector">
            {persona && (
                <div className="select">
                    <select defaultValue={persona} onChange={setPersona}>
                        <option value="default">👤 Default</option>
                        <option value="marketer">👩‍💻 Marketer</option>
                        <option value="growth-hacker">🚀 Growth Hacker</option>
                        <option value="developer">🦸‍♂ Developer</option>
                    </select>
                    <svg viewBox="0 0 8 6" width="8" height="6" fill="none" className="icon-arrow">
                        <path
                            d="M7 1.5l-3 3-3-3"
                            stroke="#9CA3AF"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default PersonaSelector;
