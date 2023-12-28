'use client'
import * as z from "zod"
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import React from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Select, SelectItem } from "@nextui-org/react"
import { useRouter } from "next/navigation"


const formSchema = z.object({
  service: z.string().min(2).max(50),
})

const ServiceForm = ({ category }: any) => {
  const router = useRouter()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      service: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(`/survey/${values.service}`)
  }
  return (
    <div className='border border-gray-900 border-spacing-5 p-10 rounded-lg flex flex-col justify-start items-start gap-5 w-96 h-96'>
      <div className="flex flex-col">
        <h2></h2>
        <h3>Let's fill an quick form to get started</h3>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
          <FormField
            control={form.control}
            name="service"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    label="Select your Service"
                    className="max-w-xs"
                    variant="underlined"
                    {...field}
                  >
                    {category.map((category: any) => (
                      <SelectItem key={category.id} value={category.id}>
                        {category.name}
                      </SelectItem>
                    ))}
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  )
}

export default ServiceForm