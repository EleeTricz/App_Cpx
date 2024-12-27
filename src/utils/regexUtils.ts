export function cleanString(str: string): string {
    return str.replace(/\s+/g, ' ').trim();
}

export function extractUniqueKeys(cleanedLocalList: string[]): string[] {
    return cleanedLocalList
        .map((item) => {
            const match = item.match(/\| (\d+)$/);
            return match ? match[1] : null;
        })
        .filter((id): id is string => id !== null);
}

export function findMatchingIds(uniqueKeys: string[], apiData: any[]): any[] {
    return uniqueKeys
        .map((key) => {
            const match = apiData.find((apiItem) => {
                const apiKey = cleanString(apiItem.nome_usuario).match(/\|\s*(\d+)$/);
                return apiKey && apiKey[1] === key;
            });
            return match ? { key, id_usuario: match.id_usuario } : null;
        })
        .filter((item): item is { key: string; id_usuario: string } => item !== null);
}
