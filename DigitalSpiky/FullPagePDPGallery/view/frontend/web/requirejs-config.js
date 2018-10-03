var config = {
    map: {
        paths:{
            "fullpagePDPgallery" : 'DigitalSpiky_FullPagePDPGallery/js/full_page_gallery',
            "fullpagePDPgalleryVideo" : 'DigitalSpiky_FullPagePDPGallery/js/full_page_youtube',
            "fullpagePDPgalleryZoom" : 'DigitalSpiky_FullPagePDPGallery/js/jquery.elevatezoom'
        },
        shim:{
            'fullpagePDPgallery':{
                'deps':['jquery']
            },
            'fullpagePDPgalleryVideo':{
                'deps':['jquery']
            },
            'fullpagePDPgalleryZoom':{
                'deps':['jquery']
            }
        }
    }
};