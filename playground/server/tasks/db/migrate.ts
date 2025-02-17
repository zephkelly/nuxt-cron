import { defineTaskHandler } from "#nuxt-cron/server/nitro/handler"

export default defineTaskHandler({
    meta: {
        name: 'example',
        description: 'Example task for testing',
    },
    schedule: '* * * * *',
    handler: async (ctx) => {
        return {
            result: {
                success: true,
                message: 'Example task executed'
            }
        }
    }
})