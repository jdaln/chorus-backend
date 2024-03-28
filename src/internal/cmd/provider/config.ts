import * as fs from 'fs';
import * as yaml from 'js-yaml';

interface Config {
    // Define the expected structure of your configuration here.
    // For dynamic properties, use an index signature:
    // [key: string]: any;
    daemon: {
        http: {
            host: string;
            port: number;
        };
        jwt: {
            secret: string;
            expiration_time: number;
            max_renewal_amount: number;
        };
    };
    storage?: {
        description?: string;
        datastores?: {
            template_backend?: {
                type?: string;
                driver?: string;
                host?: string;
                port?: number;
                username?: string;
                database?: string;
                max_connections?: number;
                max_lifetime?: number;
                ssl?: {
                    enabled?: boolean;
                    certificate_file?: string;
                    key_file?: string;
                };
                debug_mode?: boolean;
            };
        };
    };
    // Add more properties as needed.
}

class Configuration {
    private static instance: Configuration;
    private config: Config;

    private constructor(configPath: string = "./configs/dev/template_backend.yml") {
        const fileContents = fs.readFileSync(configPath, 'utf8');
        this.config = yaml.load(fileContents) as Config;
        this.provideDefaults();
        // Optionally, log the configuration for debugging.
        console.log(this.config);
    }

    public static getInstance(configPath: string = "./configs/dev/template_backend.yml"): Configuration {
        if (!Configuration.instance) {
            Configuration.instance = new Configuration(configPath);
        }
        return Configuration.instance;
    }

    private provideDefaults(): void {
        this.setDefaultValue("daemon.http.host", "127.0.0.1")
        this.setDefaultValue("daemon.http.port", "5000")
        this.setDefaultValue("daemon.jwt.secret", "eREH6oV#&6bX&zadL%")
        this.setDefaultValue("daemon.jwt.expiration_time", 72 * 60 * 60)
        this.setDefaultValue("daemon.jwt.max_renewal_amount", 24)

        this.setDefaultValue("storage.description", "Type can be 'postgres'")
        this.setDefaultValue("storage.datastores.template_backend.type", "postgres")
        this.setDefaultValue("storage.datastores.template_backend.driver", "psycopg2")
        this.setDefaultValue("storage.datastores.template_backend.host", "localhost")
        this.setDefaultValue("storage.datastores.template_backend.port", "26257")
        this.setDefaultValue("storage.datastores.template_backend.username", "root")
        this.setDefaultValue("storage.datastores.template_backend.database", "template_backend")
        this.setDefaultValue("storage.datastores.template_backend.max_connections", 5000)
        this.setDefaultValue("storage.datastores.template_backend.max_lifetime", 0)
        this.setDefaultValue("storage.datastores.template_backend.ssl.enabled", false)
        this.setDefaultValue("storage.datastores.template_backend.ssl.certificate_file", "/template_backend/postgres-certs/client.crt")
        this.setDefaultValue("storage.datastores.template_backend.ssl.key_file", "/template_backend/postgres-certs/client.key")
        this.setDefaultValue("storage.datastores.template_backend.debug_mode", false)
    }

    private setDefaultValue(keyPath: string, value: any): void {
        const path = keyPath.split(".");
        let current = this.config as any;
        for (let i = 0; i < path.length - 1; i++) {
            const part = path[i];
            if (current[part] === undefined) {
                current[part] = {};
            }
            current = current[part] as any;
        }
        const lastKey = path[path.length - 1];
        if (current[lastKey] === undefined) {
            current[lastKey] = value;
        }
    }

    public getConfig(): Config {
        return this.config;
    }
}

export function provideConfig(path: string): Config {
    const config = Configuration.getInstance(path).getConfig();
    return config;
}

