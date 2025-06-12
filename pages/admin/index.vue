<script setup lang="ts">
definePageMeta({
    layout: 'admin'
})

// Mock data - replace with actual data from your backend
const stats = ref([
    { name: 'Total Sales', value: '$24,000', change: '+12%', changeType: 'increase' },
    { name: 'Total Orders', value: '1,200', change: '+8%', changeType: 'increase' },
    { name: 'Total Customers', value: '850', change: '+15%', changeType: 'increase' },
    { name: 'Average Order Value', value: '$20', change: '-2%', changeType: 'decrease' }
])

const recentOrders = ref([
    { id: 'ORD-001', customer: 'John Doe', amount: '$120', status: 'Completed', date: '2024-03-15' },
    { id: 'ORD-002', customer: 'Jane Smith', amount: '$85', status: 'Processing', date: '2024-03-14' },
    { id: 'ORD-003', customer: 'Mike Johnson', amount: '$200', status: 'Pending', date: '2024-03-14' },
    { id: 'ORD-004', customer: 'Sarah Williams', amount: '$150', status: 'Completed', date: '2024-03-13' }
])

const recentProducts = ref([
    { id: 1, name: 'Premium Product 1', price: '$99.99', stock: 45, status: 'In Stock' },
    { id: 2, name: 'Premium Product 2', price: '$149.99', stock: 12, status: 'Low Stock' },
    { id: 3, name: 'Premium Product 3', price: '$199.99', stock: 0, status: 'Out of Stock' },
    { id: 4, name: 'Premium Product 4', price: '$79.99', stock: 30, status: 'In Stock' }
])
</script>

<template>
    <div class="space-y-6">
        <!-- Page Header -->
        <div>
            <h1 class="text-2xl font-bold text-neutral-900">Dashboard</h1>
            <p class="mt-1 text-sm text-neutral-600">Welcome back! Here's what's happening with your store.</p>
        </div>

        <!-- Stats Grid -->
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div v-for="stat in stats" :key="stat.name"
                class="bg-white rounded-lg shadow-sm p-6 border border-neutral-200">
                <div class="flex items-center justify-between">
                    <h3 class="text-sm font-medium text-neutral-600">{{ stat.name }}</h3>
                    <span :class="[
                        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                        stat.changeType === 'increase' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    ]">
                        {{ stat.change }}
                    </span>
                </div>
                <p class="mt-2 text-3xl font-semibold text-neutral-900">{{ stat.value }}</p>
            </div>
        </div>

        <!-- Recent Orders and Products -->
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <!-- Recent Orders -->
            <div class="bg-white rounded-lg shadow-sm border border-neutral-200">
                <div class="px-6 py-4 border-b border-neutral-200">
                    <h2 class="text-lg font-medium text-neutral-900">Recent Orders</h2>
                </div>
                <div class="divide-y divide-neutral-200">
                    <div v-for="order in recentOrders" :key="order.id" class="px-6 py-4">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm font-medium text-neutral-900">{{ order.id }}</p>
                                <p class="text-sm text-neutral-600">{{ order.customer }}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-sm font-medium text-neutral-900">{{ order.amount }}</p>
                                <p class="text-sm text-neutral-600">{{ order.date }}</p>
                            </div>
                        </div>
                        <div class="mt-2">
                            <span :class="[
                                'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                                order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                    order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                        'bg-yellow-100 text-yellow-800'
                            ]">
                                {{ order.status }}
                            </span>
                        </div>
                    </div>
                </div>
                <div class="px-6 py-4 border-t border-neutral-200">
                    <NuxtLink to="/admin/orders" class="text-sm font-medium text-primary-600 hover:text-primary-700">
                        View all orders
                    </NuxtLink>
                </div>
            </div>

            <!-- Recent Products -->
            <div class="bg-white rounded-lg shadow-sm border border-neutral-200">
                <div class="px-6 py-4 border-b border-neutral-200">
                    <h2 class="text-lg font-medium text-neutral-900">Recent Products</h2>
                </div>
                <div class="divide-y divide-neutral-200">
                    <div v-for="product in recentProducts" :key="product.id" class="px-6 py-4">
                        <div class="flex items-center justify-between">
                            <div>
                                <p class="text-sm font-medium text-neutral-900">{{ product.name }}</p>
                                <p class="text-sm text-neutral-600">Stock: {{ product.stock }}</p>
                            </div>
                            <div class="text-right">
                                <p class="text-sm font-medium text-neutral-900">{{ product.price }}</p>
                                <span :class="[
                                    'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
                                    product.status === 'In Stock' ? 'bg-green-100 text-green-800' :
                                        product.status === 'Low Stock' ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                ]">
                                    {{ product.status }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="px-6 py-4 border-t border-neutral-200">
                    <NuxtLink to="/admin/products" class="text-sm font-medium text-primary-600 hover:text-primary-700">
                        View all products
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>