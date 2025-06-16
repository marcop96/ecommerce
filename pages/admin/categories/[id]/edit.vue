<script setup lang="ts">
import { useRoute } from 'nuxt/app'
import type { Category } from '~/types'

const route = useRoute()
const categoryId = route.params.id

definePageMeta({
    layout: 'admin'
})



const category = ref<Category | null>(null)
const isSaving = ref(false)
const isLoading = ref(true)

const fetchCategory = async () => {
    try {
        isLoading.value = true
        const response = await fetch(`/api/categories/${categoryId}`)
        if (!response.ok) {
            throw new Error('Failed to fetch category')
        }
        const data = await response.json()
        category.value = data.categories[0]
    } catch (error) {
        console.error('Error fetching category:', error)
        // Handle error appropriately
    } finally {
        console.log(category.value)
        isLoading.value = false
    }
}

const saveCategory = async () => {
    console.log(category.value)
    if (!category.value) return
    
    isSaving.value = true
    try {
        const response = await fetch(`/api/categories/${categoryId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category.value)
        })
        
        if (!response.ok) {
            throw new Error('Failed to update category')
        }
        
        navigateTo('/admin/categories')
    } catch (error) {
        console.error('Error saving category:', error)
        // Handle error appropriately
    } finally {
        isSaving.value = false
    }
}

onMounted(() => {
    fetchCategory()
})

const statuses = ['Active', 'Inactive']
const parentCategories = [
    { id: null, name: 'None' },
    { id: 2, name: 'Parent Category 1' },
    { id: 3, name: 'Parent Category 2' }
]
</script>

<template>
    <div class="space-y-6">
        <div v-if="isLoading" class="flex items-center justify-center">
            <svg class="animate-spin h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
            </svg>
        </div>
        <div v-else-if="category">
            <!-- Page Header -->
            <div class="flex items-center justify-between">
                <div>
                    <h1 class="text-2xl font-bold text-neutral-900">Edit Category</h1>
                    <p class="mt-1 text-sm text-neutral-600">Update category information</p>
                </div>
                <div class="flex items-center space-x-3">
                    <NuxtLink to="/admin/categories"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50">
                        Cancel
                    </NuxtLink>
                    <button @click="saveCategory" :disabled="isSaving"
                        class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed">
                        <svg v-if="isSaving" class="w-5 h-5 mr-2 animate-spin" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        Save Changes
                    </button>
                </div>
            </div>

            <!-- Category Form -->
            <div class="bg-white rounded-lg shadow-sm border border-neutral-200">
                <div class="p-6 space-y-6">
                    <!-- Basic Information -->
                    <div>
                        <h2 class="text-lg font-medium text-neutral-900">Basic Information</h2>
                        <div class="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <!-- Name -->
                            <div>
                                <label for="name" class="block text-sm font-medium text-neutral-700">Name</label>
                                <input type="text" id="name" v-model="category.name"
                                    class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                            </div>

                            <!-- Slug -->
                            <div>
                                <label for="slug" class="block text-sm font-medium text-neutral-700">Slug</label>
                                <input type="text" id="slug" v-model="category.slug"
                                    class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                            </div>

                            <!-- Parent Category -->
                            <div>
                                <label for="parentCategory" class="block text-sm font-medium text-neutral-700">Parent
                                    Category</label>
                                <select id="parentCategory" v-model="category.parentId"
                                    class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                                    <option v-for="parent in parentCategories" :key="parent.id" :value="parent.id">
                                        {{ parent.name }}
                                    </option>
                                </select>
                            </div>

                            <!-- Status -->
                            <div>
                                <label for="status" class="block text-sm font-medium text-neutral-700">Status</label>
                                <select id="status" v-model="category.status"
                                    class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                                    <option v-for="status in statuses" :key="status" :value="status">
                                        {{ status }}
                                    </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <!-- Description -->
                    <div>
                        <label for="description" class="block text-sm font-medium text-neutral-700">Description</label>
                        <textarea id="description" v-model="category.description" rows="4"
                            class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"></textarea>
                    </div>

                    <!-- Category Image -->
                    <div>
                        <label class="block text-sm font-medium text-neutral-700">Category Image</label>
                        <div class="mt-1 flex items-center space-x-4">
                            <div class="relative w-32 h-32 rounded-lg overflow-hidden bg-neutral-100">
                                <img v-if="category.image" :src="category.image" alt="Category image"
                                    class="w-full h-full object-cover" />
                                <div v-else class="w-full h-full flex items-center justify-center text-neutral-400">
                                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            </div>
                            <div class="flex-1">
                                <button type="button"
                                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50">
                                    <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                    Upload Image
                                </button>
                                <p class="mt-1 text-sm text-neutral-500">
                                    PNG, JPG, GIF up to 10MB
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- SEO Information -->
                    <div>
                        <h2 class="text-lg font-medium text-neutral-900">SEO Information</h2>
                        <div class="mt-4 space-y-4">
                            <!-- SEO Title -->
                            <div>
                                <label for="seoTitle" class="block text-sm font-medium text-neutral-700">SEO Title</label>
                                <input type="text" id="seoTitle" v-model="category.seo_title"
                                    class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                            </div>

                            <!-- SEO Description -->
                            <div>
                                <label for="seoDescription" class="block text-sm font-medium text-neutral-700">SEO
                                    Description</label>
                                <textarea id="seoDescription" v-model="category.seo_description" rows="3"
                                    class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"></textarea>
                            </div>

                            <!-- SEO Keywords -->
                            <div>
                                <label for="seoKeywords" class="block text-sm font-medium text-neutral-700">SEO
                                    Keywords</label>
                                <input type="text" id="seoKeywords" v-model="category.seo_keywords"
                                    class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm" />
                                <p class="mt-1 text-sm text-neutral-500">
                                    Separate keywords with commas
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>