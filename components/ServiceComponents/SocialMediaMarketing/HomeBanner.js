"use client"
import React, { useState, useEffect, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ServiceBanner from '../../PropsShared/ServiceBanner'
import SeoComponents from '../../SeoComponents/Seo'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiCircleChevRight } from "react-icons/ci";


const HomeBanner = () => {

    const pathname = usePathname();
    const [domainName, setDomainName] = useState('');

    useEffect(() => {
        setDomainName(window.location.hostname);
    }, []);

    const title = "Social media marketing to boost your brand online    ";
    const description = "Discover iVistaz comprehensive social media marketing services for businesses in both B2B and B2C sectors.";
    const path = `${pathname}`;
    const metaImage = "";

    // const backgroundImage = "/services/seo_banner.jpg"

    const backgroundImage = {
        url: '/services/social_media_marketing_banner.jpg'
    };

    const mobileBackgroundImage = {
        url: '/service/mobile_service_banner/smm_banner.jpg'
    }

    const bannerSubHeading = "SOCIAL MEDIA"
    const bannerHeading = "MARKETING"
    return (
        <>

            <SeoComponents title={title} description={description} path={path} metaImage={metaImage} />

            <Container className='bg-white z-3 position-relative' fluid>
                <Container className="w-80 custom-container z-index-100" >
                    <Row className="d-flex align-items-center px-lg-0 px-2">
                    <Col className='d-flex flex-row flex-wrap align-items-center mb-3'>
                            <Link href="/art/services"
                                className='text-decoration-none '>
                                <h6 className='text-black mb-0 px-1'>Services</h6>
                            </Link>
                            <CiCircleChevRight fill='red' />
                            <Link href=""
                                className='text-decoration-none px-1'>
                                <h6 className='text-decoration-none text-black mb-0'>Social media marketing</h6>
                            </Link>
                        </Col>
                        <ServiceBanner backgroundImage={backgroundImage} mobileBackgroundImage={mobileBackgroundImage} bannerSubHeading={bannerSubHeading} bannerHeading={bannerHeading} />
                    </Row>
                </Container>
            </Container>
        </>
    )
}

export default HomeBanner