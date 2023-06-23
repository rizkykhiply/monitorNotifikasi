// Define Base Entity Interface
export interface BaseEntity {
    id: number;
    status: number;
    is_deleted: number;
    created_by: number;
    updated_by: number;
    deleted_by: number;
    created_at: string;
    updated_at: string;
    deleted_at: string;
}
