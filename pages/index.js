import Link from 'next/link';
import Image from 'next/image';
import {Flex, Box, Text, Button} from '@chakra-ui/react';

import {fetchData, baseUrl} from '../utils/fetchApi';
import Property from '../components/Property';

const Banner = ({imageUrl, purpose, title1, title2, desc1, desc2, linkName, buttonText}) => (
  <Flex flexWrap={'wrap'} justifyContent={'center'} alignItems={'center'} m={"10"}>
    <Image src={imageUrl} width={500} height={300} alt="banner"/>
    <Box p={"5"}>
      <Text color={"gray.500"} fontSize="sm" fontWeight={"medium"}>{purpose}</Text>
      <Text fontSize="3x1" fontWeight={"bold"}>{title1}<br />{title2}</Text>
      <Text color={"gray.700"} fontSize="lg" paddingTop={'3'} paddingBottom={'3'} >{desc1}<br />{desc2}</Text>
      <Button fontSize={"xl"} bg="blue.300" color={"white"}> 
        <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)

export default function Home({ propertiesForSale, propertiesForRent }) {

 
  return (
    <Box p={'20'}>
      <Banner 
        purpose={"RENT A HOME"}
        title1={"Rental Homes For"}
        title2={"Everyone"}
        desc1={"Explore Apartments, Villas, Homs"}
        desc2={"and more"}
        buttonText={"Explore Renting"}
        linkName={"/search?purpos=for-rent"}
        imageUrl={"https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"}
      />
      <Flex flexWrap={'wrap'} justifyContent="center" >
        {propertiesForRent.map(property => (<Property property={property} />))}
      </Flex>
      <Banner 
        purpose={"BUY A HOME"}
        title1={"Find, Buy & Own Your"}
        title2={"Dream Home"}
        desc1={"Explore Apartments, Villas, Homs"}
        desc2={"and more"}
        buttonText={"Explore Buying"}
        linkName={"/search?purpos=for-sale"}
        imageUrl={"https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"}
      />
      <Flex flexWrap={'wrap'} justifyContent="center">
        {propertiesForSale.map(property => (<Property property={property} />))}
      </Flex>
    </Box>
  )
}


export async function getStaticProps() {
  const response1 = await fetchData(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`);
  const response2 = await fetchData(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`);
  response1.hits.forEach(e => {
    console.log(e.geography);
  })
  return {
    props: {
      propertiesForSale: response1?.hits,
      propertiesForRent: response2?.hits
    }
  }
}