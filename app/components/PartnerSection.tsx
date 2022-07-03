import React, { useRef } from 'react';
import useInView from '../utils/useInView';
import { Box, Grid, Typography } from "@mui/material";
import { prefix } from '@utils/prefix';

interface IPartner {imgPath: string, alt: string};

export default function PartnerSection() {
    const inviewRef = useRef({} as HTMLDivElement);

    const options = {
        root : 'root',
        rootMargin : '0px',
        threshold : 0.5
    };

    function onEntry(entry: any) {
        inviewRef.current.classList.add('visible');
        // console.log('in: ', entry.intersectionRatio)
    };
  
    function onExit(entry: any) {
        inviewRef.current.classList.remove('visible');
        // console.log('out: ', entry.intersectionRatio)
    };

    const sliderRef = useRef({} as HTMLDivElement);

    const handleSlider = () => {
        if (sliderRef.current) {
            const prev = Number(sliderRef.current.style.left.replace('px', ''));
            if (prev <= -(120 + 24) * partnerList.length) {
                sliderRef.current.style.left = '0px'            
            } else {
                sliderRef.current.style.left = `${prev - 1}px`            
            }
        }
    };
    
    React.useEffect(() => {
        const silederInterval = setInterval(() => { handleSlider() }, 20);
        return () => clearInterval(silederInterval);
    }, [])

    const RenderPartnerLogo = ({imgPath, alt}: IPartner) => (
        <Box width={120} height={120} display='inline-block' mr='24px'>
            <img width='100%' height='100%' style={{objectFit: 'contain'}} src={prefix + imgPath} alt={alt} srcSet="" />
        </Box>
    );

    const partnerList: IPartner[] = [{
        imgPath: '/images/logo-01.png',
        alt: 'TGRT'
    }, {
        imgPath: '/images/logo-02.png',
        alt: 'Aurelia'
    }, {
        imgPath: '/images/logo-03.png',
        alt: 'SunForce'
    }, {
        imgPath: '/images/logo-04.png',
        alt: 'adicomp'
    }, {
        imgPath: '/images/logo-05.png',
        alt: 'AcroRed Technologies, Inc'
    }, {
        imgPath: '/images/logo-06.png',
        alt: 'EPICOR'
    }, {
        imgPath: '/images/logo-07.png',
        alt: 'HUAHUA SHIN'
    }, {
        imgPath: '/images/logo-08.png',
        alt: 'iisi'
    }, {
        imgPath: '/images/logo-09.png',
        alt: '金茂榮'
    }, {
        imgPath: '/images/logo-10.png',
        alt: '科泰豐'
    }, {
        imgPath: '/images/logo-11.png',
        alt: '昇泰能源'
    }, {
        imgPath: '/images/logo-12.png',
        alt: '綠美地'
    }, {
        imgPath: '/images/logo-13.png',
        alt: '三生農機'
    }];

    useInView(inviewRef, options, onEntry, onExit);
    return (
        <React.Fragment>
            <Grid container justifyContent='center' alignItems='center' ref={inviewRef} mb={7.5}
                sx={{
                    perspective: '100px',
                    '&.visible': {
                    }
                }}
                bgcolor='#07451A'
            >
                <Grid item maxWidth='xl' width='100%'>
                    <Grid container pl={15} spacing={7.25}>
                        <Grid item xs={6} display='flex' sx={{flexDirection: 'column', justifyContent: 'center'}}>
                            <Typography variant='h2' color='info.main' mb={2.5}>合作夥伴</Typography>
                            <Typography variant='subtitle2' color='common.white'>
                            佳瑪環能整合產業上下游設備商，進行系統性結盟，發展國際團隊，協助各國維護環境及產業朝向永續的方向前進。因應未來趨勢與潮流，將導入 ERP、虛擬主機及雲端管理系統，同時整合各分散式微型能資源轉換中心的即時運轉數據及資料庫，進行智能化營運管理及產業大數據整合運用，以利系統效能優化及國際市場開拓領先優勢。
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <img width='100%' height='100%' style={{objectFit: 'cover'}} src={`${prefix}/images/team.jpg`} alt="合作夥伴" srcSet="" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container justifyContent='center' alignItems='center' mb={15}>
                <Grid item maxWidth='xl' width='100%' position='relative' overflow='hidden' height={120}>
                    <Box ref={sliderRef} position='absolute' sx={{top: 0, left: 0}} width={2 * (120 + 24) * partnerList.length} overflow='hidden'>
                        {partnerList.map(p => <RenderPartnerLogo key={p.alt} {...p} />)}
                        {partnerList.map(p => <RenderPartnerLogo key={p.imgPath} {...p} />)}
                    </Box>
                </Grid>
            </Grid>
        </React.Fragment>
    )
};