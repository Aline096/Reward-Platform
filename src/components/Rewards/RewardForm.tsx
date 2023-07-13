'use client'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'

const RewardForm = ({
  type,
  form,
  onSubmit,
  handleFileChange,
  isUploading,
  loading,
  previewImage,
}: any) => {
  return (
    <div className="flex justify-center items-center">
      <div className="mx-4 flex flex-col items-center justify-center lg:left-[50%] lg:mx-0 lg:w-1/2">
        <div>
          <h1 className="text-xl font-semibold whitespace-nowrap py-2">
            {type === 'edit' ? 'Update Reward' : 'Create Reward'}
          </h1>
        </div>
        <div className="flex w-full flex-col items-center border-b border-blue-700 border-opacity-[.07] pb-[90px] lg:w-3/5">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Name" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Image</FormLabel>
                    <FormControl>
                      <Input
                        type="file"
                        onChange={handleFileChange}
                        accept="image/png, image/jpeg"
                        placeholder="Choose an image file"
                        // {...field}
                      />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {previewImage && (
                <div className="mt-4">
                  <Image
                    width={100}
                    height={50}
                    src={previewImage}
                    alt="Image Preview"
                  />
                </div>
              )}
              <FormField
                control={form.control}
                name="points"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Points</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Points" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isAvailable"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>isAvailable</FormLabel>
                    <FormControl>
                      <Input type="checkbox" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Quantity</FormLabel>
                    <FormControl>
                      <Input type="number" placeholder="Quantity" {...field} />
                    </FormControl>
                    <FormDescription></FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                disabled={isUploading}
                className="bg-blue-600 h-10 w-full hover:bg-blue-400"
              >
                {isUploading ? (
                  'Uploading Image ...'
                ) : loading ? (
                  <Loader2Icon
                    size={20}
                    color="#00ff04"
                    className="animate-spin inline"
                  />
                ) : (
                  'Save'
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default RewardForm
