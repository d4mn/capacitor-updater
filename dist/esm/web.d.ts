import { WebPlugin } from '@capacitor/core';
import type { CapacitorUpdaterPlugin } from './definitions';
export declare class CapacitorUpdaterWeb extends WebPlugin implements CapacitorUpdaterPlugin {
    download(options: {
        url: string;
    }): Promise<{
        version: string;
    }>;
    set(options: {
        version: string;
        versionName?: string;
    }): Promise<void>;
    getId(): Promise<{
        id: string;
    }>;
    getPluginVersion(): Promise<{
        version: string;
    }>;
    delete(options: {
        version: string;
    }): Promise<void>;
    list(): Promise<{
        versions: string[];
    }>;
    reset(options?: {
        toAutoUpdate?: boolean;
    }): Promise<void>;
    current(): Promise<{
        current: string;
        currentNative: string;
    }>;
    reload(): Promise<void>;
    versionName(): Promise<{
        versionName: string;
    }>;
    notifyAppReady(): Promise<void>;
    delayUpdate(): Promise<void>;
    cancelDelay(): Promise<void>;
}
