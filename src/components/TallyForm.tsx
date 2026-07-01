import React, { useEffect } from 'react';

/**
 * TallyForm component that ensures the Tally embed script is loaded
 * and properly initializes the form when mounted.
 */
export const TallyForm = () => {
    useEffect(() => {
        // Tally's embed script uses Tally.loadEmbeds() to initialize forms
        // that were added to the DOM after the script originally loaded.
        // @ts-ignore
        if (typeof Tally !== 'undefined') {
            // @ts-ignore
            Tally.loadEmbeds();
        } else {
            // If the script hasn't loaded yet, it will automatically
            // scan and load once it's available.
            // We can also ensure the script exists in the document:
            const scriptId = 'tally-embed-js';
            if (!document.getElementById(scriptId)) {
                const script = document.createElement('script');
                script.id = scriptId;
                script.src = "https://tally.so/widgets/embed.js";
                script.onload = () => {
                    // @ts-ignore
                    if (typeof Tally !== 'undefined') {
                        // @ts-ignore
                        Tally.loadEmbeds();
                    }
                };
                document.body.appendChild(script);
            }
        }
    }, []);

    return (
        <div className="tally-form-container" style={{ minHeight: '500px', width: '100%' }}>
            <iframe
                data-tally-src="https://tally.so/embed/gD5BpJ?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                loading="lazy"
                width="100%"
                height="500"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="AG Landscape Lead Form"
                className="w-full h-full border-none rounded-sm"
            ></iframe>
        </div>
    );
};
