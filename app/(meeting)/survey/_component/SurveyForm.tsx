'use client'
import * as z from "zod";
import axios from "axios";
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";

import { Autocomplete, AutocompleteItem, Progress } from '@nextui-org/react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { budget, businessTypes, countries, projectTypes } from '@/constant';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from "next/navigation";

const formSchema = z.object({
    location: z.string().min(2).max(50),
    budget: z.string().min(1),
    business: z.string().min(2).max(50),
    projectType: z.string().min(2).max(50),
    website: z.string().min(2).max(50),
});

const SurveyForm = ({ service }: { service: string }) => {
    const router = useRouter()
    const [submittedFields, setSubmitField] = useState(0);

    const requiredFields = Object.keys(formSchema.shape).length
    const submitionRate = (submittedFields / requiredFields) * 100

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            location: '',
            budget: '',
            business: '',
            projectType: '',
            website: '',
        },
    });
    const formState = form.formState;

    const onSubmit = async(values: z.infer<typeof formSchema>)=> {
        try{
            console.log({values})
            const response = await axios.post('/api/survey',{
                business: values.business,
                location: values.location,
                budget: parseInt(values.budget), 
                projectType: values.projectType,
                website: values.website,       
            }) 
            toast.success("Course created");
            form.reset()
            router.push(`/contact`)
        } catch(error) {
            toast.error("Something went wrong! Make sure to fill all fields");
        }
    }

    return (
        <div className='flex flex-col items-start justify-start gap-10'>
            <div className='flex flex-col max-w-xl gap-5'>
                <div className='flex flex-col w-full'>
                    <p>Progress {submittedFields}/{requiredFields}</p>
                    <Progress color={submitionRate === 100 ? 'success' : 'warning'} aria-label="Loading..." value={submitionRate} />
                </div>
                <div className='flex flex-col max-w-md'>
                    <h3>You selected: {service}</h3>
                    <p>This form help us to know each other in general 😍 and save time ⌛</p>
                </div>
            </div>
            <div className='flex w-full'>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col space-y-8 w-full">
                        {submittedFields === 0 && (
                            <FormField
                                control={form.control}
                                name="website"
                                render={({ field }) => (
                                    <FormItem className='flex flex-col w-full'>
                                        <FormLabel className='text-lg'>Do you already have an website?</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select an Option" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value={'yes'}>Yes, I alrady have</SelectItem>
                                                    <SelectItem value={'no'}>No, I want to make it from scratch</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
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
                                        <FormControl>
                                            <Autocomplete
                                                label="Which country you are from"
                                                variant='underlined'
                                                className="max-w-xs"
                                                onSelectionChange={field.onChange}
                                                defaultItems={countries}
                                            >
                                                {countries.map((country) => (
                                                    <AutocompleteItem
                                                        key={country.name}
                                                        value={country.code}
                                                        
                                                    >
                                                        {country.name}
                                                    </AutocompleteItem>
                                                ))}
                                            </Autocomplete>
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
                                        <FormControl>
                                            <Autocomplete
                                                label="Tell me about your estimated budget"
                                                variant='underlined'
                                                className="max-w-xs"
                                                onSelectionChange={field.onChange}
                                                defaultItems={budget}
                                            >
                                                {budget.map((budgets) => (
                                                    <AutocompleteItem
                                                        key={budgets.value}
                                                        value={budgets.value}
                                                    >
                                                        {budgets.label}
                                                    </AutocompleteItem>
                                                ))}
                                            </Autocomplete>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        {submittedFields === 3 && (
                            <FormField
                                control={form.control}
                                name="business"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Select your Business type</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select an Option" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    {businessTypes.map((type) => (
                                                        <SelectItem key={type.value} value={type.value}>
                                                            {type.label}
                                                        </SelectItem>
                                                    ))}
                                                </SelectContent>
                                            </Select>
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
                                        <FormControl>
                                            <Autocomplete
                                                label="Select your project type"
                                                variant='underlined'
                                                className="max-w-xs"
                                                onSelectionChange={field.onChange}
                                                defaultItems={projectTypes}
                                            >
                                                {projectTypes.map((project) => (
                                                    <AutocompleteItem
                                                        key={project.value}
                                                        value={project.value}
                                                    >
                                                        {project.label}
                                                    </AutocompleteItem>
                                                ))}
                                            </Autocomplete>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        )}
                        {submittedFields < requiredFields && (
                            <Button
                                className='w-full'
                                type="button"
                                onClick={() => {
                                    setSubmitField(submittedFields + 1);
                                }}
                            >
                                Next
                            </Button>
                        )}
                        {submittedFields === requiredFields && (
                            <div className='flex flex-col gap-2'>
                                <Button className='border-2 border-green-500 hover:border-blue-500 transition-all' type="submit" onClick={() => { (!formState.isValid) ? toast.error("Please go back and fill all fields") : onSubmit(form.getValues()) }}>
                                    Submit
                                </Button>
                                <Button
                                    className='w-full'
                                    type="button"
                                    variant={'outline'}
                                    onClick={() => {
                                        setSubmitField(submittedFields - submittedFields);
                                    }}
                                >
                                    Back
                                </Button>
                            </div>
                        )}
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default SurveyForm;