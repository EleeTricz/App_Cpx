export function formatDate(date: string): string {
    const d = new Date(date);
    d.setMinutes(d.getMinutes() + d.getTimezoneOffset());
    const day = d.getDate().toString().padStart(2, '0');
    const month = (d.getMonth() + 1).toString().padStart(2, '0');
    const year = d.getFullYear();
    return `${day}/${month}/${year}`;
}
