import sanityClient from "@sanity/client"

export default sanityClient({
    projectId: "b9c1jyic",
    apiVersion: '1',
    dataset: "notes",
    useCdn: false,
})