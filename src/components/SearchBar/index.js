import { Input, useInput } from '@nextui-org/react'
import { useDispatch } from 'react-redux'
import { updateSearch } from '@features/search/searchSlice'

export default function SearchBar () {
  const dispatch = useDispatch()
  const input = useInput()
  const { value = '', setValue } = input

  // dispatch(updateSearch("value"));
  const handleChange = (event) => {
    const {
      target: { value = '' }
    } = event
    setValue(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateSearch(value))
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        bordered
        labelPlaceholder="Enter Artist"
        color="secondary"
        placeholder="Search Artist"
        type="search"
        onChange={handleChange}
      />
    </form>
  )
}
