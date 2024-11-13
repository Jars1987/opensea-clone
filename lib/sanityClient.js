import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '8ace144s',
  dataset: 'production',
  apiVersion: '2021-03-25',
  token:
    'skaoliv4rya6JrZHKGDLTdDH7osrJrYpZ7s4rukTElYAnZAVnq9iyfTYX9bUzfLKeddnpS99zkkaXKIw68zlWDDl2FQb6i7WpdPCcCP7nHLi2v0Kp9HPmMfvr0SMRR6ilEmspyG0eDNHC9SKhbOYJdUXMl0NDmIrAc8jkfb049m9clFz8rwR',
  useCdn: false,
})
