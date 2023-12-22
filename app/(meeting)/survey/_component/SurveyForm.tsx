'use client'
import React, { useState } from 'react';
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from '@nextui-org/react';
import { useForm } from 'react-hook-form';

const formSchema = z.object({
    location: z.string().min(2).max(50),
    budget: z.number().min(1).max(Infinity),
    businessType: z.string().min(2).max(50),
    projectType: z.string().min(2).max(50),
    website: z.boolean(),
});

const SurveyForm = () => {
    const [submittedFields, setSubmitField] = useState(0);
    const requiredFields = Object.keys(formSchema.shape).length
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            website: undefined, // Do you have an website??
            location: '',
            budget: undefined,
            businessType: '',
            projectType: '', // Fix Price  // monthly based project // hourly based project // Commission based.
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values);
    }

    return (
        <div>
            <div>
                <p>{submittedFields}/{requiredFields}</p> 
                <p> Percententage: {(submittedFields / requiredFields) * 100}%</p>
            </div>

            <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    {submittedFields === 0 && (
                        <FormField
                            control={form.control}
                            name="website"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Do you already have an website?</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://yourwebsite" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    {submittedFields === 1 && (
                        <FormField
                            control={form.control}
                            name="location"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Which country you are from</FormLabel>
                                    <FormControl>
                                        <Input placeholder="@email" {...field} />
                                    </FormControl>

                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    {submittedFields === 2 && (
                        <FormField
                            control={form.control}
                            name="budget"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Tell me about your estimated budget</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    {submittedFields === 3 && (
                        <FormField
                            control={form.control}
                            name="businessType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Select your business type</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    {submittedFields === 4 && (
                        <FormField
                            control={form.control}
                            name="projectType"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Select your project type</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    )}
                    {submittedFields < requiredFields && ( // 4 <= 4
                        <Button type="button" onClick={() => setSubmitField(submittedFields + 1)}>
                            Next
                        </Button>
                    )}
                    {submittedFields === requiredFields && ( // 4 <= 4
                        <Button type="submit">
                            Submit
                        </Button>
                    )}
                </form>
            </Form>
            </div>
        </div>
    );
};

export default SurveyForm;