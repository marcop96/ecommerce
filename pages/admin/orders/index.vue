<script setup lang="ts">
definePageMeta({
    layout: 'admin'
})

// Mock data - replace with actual data from your backend
const orders = ref([
    {
        id: 'ORD-001',
        customer: {
            name: 'John Doe',
            email: 'john@example.com'
        },
        date: '2024-03-15',
        total: 299.99,
        status: 'Processing',
        paymentMethod: 'Credit Card',
        items: 3
    },
    {
        id: 'ORD-002',
        customer: {
            name: 'Jane Smith',
            email: 'jane@example.com'
        },
        date: '2024-03-14',
        total: 149.99,
        status: 'Completed',
        paymentMethod: 'PayPal',
        items: 2
    },
    {
        id: 'ORD-003',
        customer: {
            name: 'Bob Johnson',
            email: 'bob@example.com'
        },
        date: '2024-03-13',
        total: 499.99,
        status: 'Pending',
        paymentMethod: 'Credit Card',
        items: 1
    }
])

const searchQuery = ref('')
const selectedStatus = ref('all')
const selectedDateRange = ref('all')

const statuses = ['Pending', 'Processing', 'Completed', 'Cancelled']
const dateRanges = [
    { value: 'all', label: 'All Time' },
    { value: 'today', label: 'Today' },
    { value: 'yesterday', label: 'Yesterday' },
    { value: 'last7days', label: 'Last 7 Days' },
    { value: 'last30days', label: 'Last 30 Days' }
]

const filteredOrders = computed(() => {
    return orders.value.filter(order => {
        const matchesSearch = order.id.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            order.customer.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
            order.customer.email.toLowerCase().includes(searchQuery.value.toLowerCase())
        const matchesStatus = selectedStatus.value === 'all' || order.status === selectedStatus.value
        // Add date range filtering logic here
        return matchesSearch && matchesStatus
    })
})

const getStatusColor = (status) => {
    const colors = {
        'Pending': 'bg-yellow-100 text-yellow-800',
        'Processing': 'bg-blue-100 text-blue-800',
        'Completed': 'bg-green-100 text-green-800',
        'Cancelled': 'bg-red-100 text-red-800'
    }
    return colors[status] || 'bg-gray-100 text-gray-800'
}
</script>

<template>
    <div class="space-y-6">
        <!-- Page Header -->
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold text-neutral-900">Orders</h1>
                <p class="mt-1 text-sm text-neutral-600">Manage your store orders</p>
            </div>
        </div>

        <!-- Filters -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 p-4">
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <!-- Search -->
                <div>
                    <label for="search" class="block text-sm font-medium text-neutral-700">Search</label>
                    <input type="text" id="search" v-model="searchQuery"
                        class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm"
                        placeholder="Search orders..." />
                </div>

                <!-- Status Filter -->
                <div>
                    <label for="status" class="block text-sm font-medium text-neutral-700">Status</label>
                    <select id="status" v-model="selectedStatus"
                        class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                        <option value="all">All Statuses</option>
                        <option v-for="status in statuses" :key="status" :value="status">
                            {{ status }}
                        </option>
                    </select>
                </div>

                <!-- Date Range Filter -->
                <div>
                    <label for="dateRange" class="block text-sm font-medium text-neutral-700">Date Range</label>
                    <select id="dateRange" v-model="selectedDateRange"
                        class="mt-1 block w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500 sm:text-sm">
                        <option v-for="range in dateRanges" :key="range.value" :value="range.value">
                            {{ range.label }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <!-- Orders Table -->
        <div class="bg-white rounded-lg shadow-sm border border-neutral-200 overflow-hidden">
            <div class="overflow-x-auto">
                <table class="min-w-full divide-y divide-neutral-200">
                    <thead class="bg-neutral-50">
                        <tr>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Order
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Customer
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Total
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col"
                                class="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                                Payment
                            </th>
                            <th scope="col" class="relative px-6 py-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-neutral-200">
                        <tr v-for="order in filteredOrders" :key="order.id">
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-primary-600">
                                    <NuxtLink :to="`/admin/orders/${order.id}`">{{ order.id }}</NuxtLink>
                                </div>
                                <div class="text-sm text-neutral-500">{{ order.items }} items</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <div class="text-sm font-medium text-neutral-900">{{ order.customer.name }}</div>
                                <div class="text-sm text-neutral-500">{{ order.customer.email }}</div>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                                {{ order.date }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-900">
                                ${{ order.total.toFixed(2) }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <span :class="[
                                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                                    getStatusColor(order.status)
                                ]">
                                    {{ order.status }}
                                </span>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                                {{ order.paymentMethod }}
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                <div class="flex items-center justify-end space-x-3">
                                    <NuxtLink :to="`/admin/orders/${order.id}`"
                                        class="text-primary-600 hover:text-primary-900">
                                        View
                                    </NuxtLink>
                                    <button class="text-neutral-600 hover:text-neutral-900">
                                        Print
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>