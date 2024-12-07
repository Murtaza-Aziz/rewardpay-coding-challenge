import fs from 'fs';

export function parseData(path: string): any[] {
    const rawData = fs.readFileSync(path, 'utf-8');
    return JSON.parse(rawData).data;
}