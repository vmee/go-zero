export interface GocliRequestInterface {
    get<T>(url: string, req?: unknown, config?: unknown): Promise<T>;
    delete<T>(url: string, req?: unknown, config?: unknown): Promise<T>;
    put<T>(url: string, req?: unknown, config?: unknown): Promise<T>;
    post<T>(url: string, req?: unknown, config?: unknown): Promise<T>;
    patch<T>(url: string, req?: unknown, config?: unknown): Promise<T>;
}