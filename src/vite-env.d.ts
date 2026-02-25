/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GHL_WEBHOOK_URL: string;
    readonly VITE_GHL_CHAT_WIDGET_URL: string;
    readonly VITE_GHL_LOCATION_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
