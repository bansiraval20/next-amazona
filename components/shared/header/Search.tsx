import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { APP_NAME } from '@/lib/constants'
import { SearchIcon } from 'lucide-react'
import React from 'react'

const Search = () => {
  const categories = ['men', 'women', 'kids', 'accessories']

  return (
    <form
      action="/search"
      method="GET"
      className="flex h-10 w-full max-w-3xl overflow-hidden rounded-md border border-gray-300 bg-white"
    >
      {/* Category */}
      <Select name="category" defaultValue="all">
        <SelectTrigger className="h-full w-16 rounded-none border-0 border-r bg-gray-100 px-2 text-sm text-black focus:ring-0">
          <SelectValue placeholder="ALL" />
        </SelectTrigger>

        <SelectContent>
          <SelectItem value="all">ALL</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category} value={category}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search Input */}
      <Input
        name="q"
        type="search"
        placeholder={`Search site ${APP_NAME}`}
        className="h-full flex-1 rounded-none border-0 px-3 text-base text-black focus-visible:ring-0"
      />

      {/* Search Button */}
      <button
        type="submit"
        className="flex h-full items-center justify-center bg-yellow-400 px-4 text-black hover:bg-yellow-500"
      >
        <SearchIcon className="h-5 w-5" />
      </button>
    </form>
  )
}

export default Search
