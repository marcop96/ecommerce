<script setup lang="ts">
import type { Category } from '~/types/'

definePageMeta({
    layout: 'admin'
})

const router = useRouter()

// Initialize empty category
const category = ref<Category>({
    id: '',
    name: '',
    slug: '',
    description: '',
    created_at: '',
    updated_at: ''
})

const isSaving = ref(false)
const errorMessage = ref('')

// Auto-generate slug when name changes
watch(() => category.value.name, (newName) => {
    if (newName) {
        category.value.slug = newName
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/(^-|-$)/g, '')
    }
})

const saveCategory = async () => {
    isSaving.value = true
    errorMessage.value = ''
    try {
        const { data, error } = await useFetch('/api/categories/categories', {
            method: 'POST',
            body: {
                name: category.value.name,
                description: category.value.description,
                slug: category.value.slug
            }
        })

        if (error.value) {
            throw new Error(error.value.message)
        }

        router.push('/admin/categories')
    } catch (error: any) {
        console.error('Error saving category:', error)
        errorMessage.value = error.message || 'Failed to create category. Please try again.'
    } finally {
        isSaving.value = false
    }
}
</script>

<template>
    <div class="space-y-6">
        <!-- Page Header -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold text-neutral-900">New Category</h1>
                <p class="mt-1 text-sm text-neutral-600">Create a new category</p>
            </div>
            <div class="flex items-center space-x-3">
                <button @click="router.push('/admin/categories')"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-neutral-700 bg-white border border-neutral-300 rounded-lg hover:bg-neutral-50">
                    Cancel
                </button>
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
                    {{ isSaving ? 'Saving...' : 'Create Category' }}
                </button>
            </div>
        </div>

        <!-- Category Form -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200">
            <div class="p-6 space-y-6">
                <!-- Basic Information -->
                <div>
                    <h2 class="text-lg font-medium text-neutral-900">Basic Information</h2>
                    <div class="mt-4 grid grid-cols-1 gap-6">
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
                            <p class="mt-1 text-sm text-neutral-500">The URL-friendly version of the name. Auto-generated from the name, but you can customize it.</p>
                        </div>

                        <!-- Description -->
                        <div>
                            <label for="description" class="block text-sm font-medium text-neutral-700">Description</label>
                            <textarea id="description" v-model="category.description" rows="4"
                                class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"></textarea>
                        </div>
                    </div>
                </div>

                <!-- Error Message -->
                <div v-if="errorMessage" class="rounded-md bg-red-50 p-4">
                    <div class="flex">
                        <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                                    clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div class="ml-3">
                            <p class="text-sm text-red-700">{{ errorMessage }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template> 