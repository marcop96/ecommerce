<script setup lang="ts">
import type { Category } from '~/types/'

definePageMeta({
    layout: 'admin'
})

const searchQuery = ref('')
const selectedStatus = ref('all')
const isDeleteModalOpen = ref(false)
const categoryToDelete = ref<Category | null>(null)

// Fetch categories
const { data: categoriesData, error: categoriesError, refresh: refreshCategories } = await useFetch<{ categories: Category[] }>('/api/categories/categories')
const categories = ref<Category[]>(categoriesData.value?.categories || [])

const filteredCategories = computed(() => {
    return categories.value.filter(category => {
        const matchesSearch = category.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            category.description?.toLowerCase().includes(searchQuery.value.toLowerCase())
        return matchesSearch
    })
})

const statuses = ['Active', 'Inactive']

const openDeleteModal = (category: Category) => {
    categoryToDelete.value = category
    isDeleteModalOpen.value = true
}

const deleteCategory = async () => {
    if (!categoryToDelete.value) return

    try {
        const { error } = await useFetch(`/api/categories/${categoryToDelete.value.id}`, {
            method: 'DELETE'
        })

        if (error.value) {
            throw new Error(error.value.message)
        }

        // Refresh the categories list
        await refreshCategories()
        isDeleteModalOpen.value = false
        categoryToDelete.value = null
    } catch (error: any) {
        console.error('Error deleting category:', error)
        // You might want to show an error message to the user here
    }
}
</script>

<template>
    <div class="space-y-6">
        <!-- Page Header -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold text-neutral-900">Categories</h1>
                <p class="mt-1 text-sm text-neutral-600">Manage your product categories</p>
            </div>
            <NuxtLink to="/admin/categories/new"
                class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
                </svg>
                Add Category
            </NuxtLink>
        </div>

        <!-- Error State -->
        <div v-if="categoriesError" class="rounded-md bg-red-50 p-4">
            <div class="flex">
                <div class="flex-shrink-0">
                    <svg class="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                            clip-rule="evenodd" />
                    </svg>
                </div>
                <div class="ml-3">
                    <p class="text-sm text-red-700">Failed to load categories. Please try again.</p>
                </div>
            </div>
        </div>

        <!-- Loading State -->
        <div v-else-if="!categories" class="flex justify-center items-center py-12">
            <svg class="animate-spin h-8 w-8 text-primary-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
            </svg>
        </div>

        <!-- Content -->
        <template v-else>
            <!-- Filters -->
            <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-4">
                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <!-- Search -->
                    <div>
                        <label for="search" class="block text-sm font-medium text-neutral-700">Search</label>
                        <input type="text" id="search" v-model="searchQuery"
                            class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                            placeholder="Search categories..." />
                    </div>
                </div>
            </div>

            <!-- Categories Table -->
            <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
                <table class="min-w-full divide-y divide-neutral-200">
                    <thead class="bg-neutral-50">
                        <tr>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Category
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Description
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Products
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-neutral-200">
                        <tr v-for="category in filteredCategories" :key="category.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-neutral-900">{{ category.name }}</div>
                                <div class="text-sm text-neutral-500">{{ category.slug }}</div>
                            </td>
                            <td class="px-6 py-4">
                                <div class="text-sm text-neutral-900">{{ category.description }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm text-neutral-900">{{ category.productCount }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span :class="[
                                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                                    category.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                                ]">
                                    {{ category.status }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex items-center justify-end space-x-3">
                                    <NuxtLink :to="`/admin/categories/${category.id}/edit`"
                                        class="text-primary-600 hover:text-primary-900">
                                        Edit
                                    </NuxtLink>
                                    <button @click="openDeleteModal(category)" class="text-red-600 hover:text-red-900">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>

        <!-- Delete Modal -->
        <div v-if="isDeleteModalOpen" class="fixed inset-0 z-50 overflow-y-auto">
            <div class="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
                <div class="fixed inset-0 transition-opacity" aria-hidden="true">
                    <div class="absolute inset-0 bg-neutral-500 opacity-75"></div>
                </div>
                <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
                <div
                    class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">
                            <div
                                class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                                <svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                            </div>
                            <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 class="text-lg leading-6 font-medium text-neutral-900">
                                    Delete Category
                                </h3>
                                <div class="mt-2">
                                    <p class="text-sm text-neutral-500">
                                        Are you sure you want to delete "{{ categoryToDelete?.name }}"? This action
                                        cannot be
                                        undone.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-neutral-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" @click="deleteCategory"
                            class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                            Delete
                        </button>
                        <button type="button" @click="isDeleteModalOpen = false"
                            class="mt-3 w-full inline-flex justify-center rounded-md border border-neutral-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>