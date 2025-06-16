export interface Product {
    id: string
    name: string
    slug: string
    description: string
    price: number
    stock: number
    category: string[]
    status: string
    created_at: string
    updated_at: string
}

export interface ProductImage {
    id: string
    product_id: string
    image_url: string
    created_at: string
    updated_at: string
}

export interface ProductSpecification {
    id: string
    product_id: string
    name: string
    value: string
    created_at: string
    updated_at: string
}

export interface Category {
    id: string
    name: string
    slug: string
    description: string
    status: string
    parentId: string | null
    seo_title?: string
    seo_description?: string
    seo_keywords?: string
    image?: string
}
export interface Customer {
    id: string
}