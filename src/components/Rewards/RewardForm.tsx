'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Loader2Icon } from 'lucide-react'
import Image from 'next/image'
import { Label } from '../ui/label'

const RewardForm = ({
  type,
  register,
  handleSubmit,
  onSubmit,
  isUploading,
  loading,
  previewImage,
  errors,
  newImage
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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="mb-3">
              <Label className="mb-2" htmlFor="name">
                Name
              </Label>
              <Input id="name" placeholder="Name" {...register('name')} />
              {errors.name?.message ? (
                <p className=" text-red-500 text-sm mt-2">
                  {errors.name?.message}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className="mb-3">
              <Label className="mb-2" htmlFor="image">
                Image
              </Label>
              <Input
                id="image"
                type="file"
                accept="image/png, image/jpeg"
                placeholder="Choose an image file"
                {...register('image')}
              />
              {errors.image?.message ? (
                <p className=" text-red-500 text-sm mt-2">
                  {errors.image?.message}
                </p>
              ) : (
                ''
              )}
            </div>
            {type !== 'edit'&& newImage ? (
              <div className="mt-4">
                <Image
                  width={100}
                  height={50}
                  src={newImage}
                  alt="Reward image"
                />
              </div>
            ) : ''}
            {previewImage && newImage ? (
              <div className="mt-4">
                <Image
                  width={100}
                  height={50}
                  src={newImage}
                  alt="New Image"
                />
              </div>
            ) : previewImage? (
              <div className="mt-4">
                <Image
                  width={100}
                  height={50}
                  src={previewImage}
                  alt="Old Image"
                />
              </div>
            ):''}
            <div className="mb-3">
              <Label className="mb-2" htmlFor="points">
                Points
              </Label>
              <Input
                id="points"
                type="number"
                placeholder="Points"
                {...register('points')}
              />
              {errors.points?.message ? (
                <p className=" text-red-500 text-sm mt-2">
                  {errors.points?.message}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className="mb-3">
              <Label className="mb-2" htmlFor="isAvailable">
                Available
              </Label>
              <Input
                id="isAvailable"
                type="checkbox"
                {...register('isAvailable')}
              />
              {errors.isAvailable?.message ? (
                <p className=" text-red-500 text-sm mt-2">
                  {errors.isAvailable?.message}
                </p>
              ) : (
                ''
              )}
            </div>
            <div className='mb-3'>
              <Label className='mb-2' htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                placeholder="Quantity"
                {...register('quantity')}
              />
              {errors.quantity?.message ? (
                <p className=" text-red-500 text-sm mt-2">
                  {errors.quantity?.message}
                </p>
              ) : (
                ''
              )}
            </div>
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
        </div>
      </div>
    </div>
  )
}

export default RewardForm
