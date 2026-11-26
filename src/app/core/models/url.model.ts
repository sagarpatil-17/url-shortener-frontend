export interface CreateUrlRequest {
    originalUrl: string;
}

export interface ShortUrlData {
    id: string;
    originalUrl: string;
    shortCode: string;
    shortUrl: string;
    clicks: number;
    expiresAt: string | null;
    createdAt: string;
}

export interface CreateUrlResponse {
    success: boolean;
    message: string;
    data: ShortUrlData;
}

export interface ApiErrorResponse {
    success: boolean;
    message: string;
}