module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        borderRadius: {
            none: "0",
            sm: "0.125rem",
            DEFAULT: "0.25rem",
            DEFAULT: "4px",
            md: "0.375rem",
            lg: "0.5rem",
            xl: "0.75rem",
            "2xl": "1rem",
            "3xl": "1.5rem",
            "4xl": "1.75rem",
            "5xl": "2rem",
            "6xl": "2.5rem",
            "7xl": "3rem",
            full: "9999px",
            large: "12px",
        },
        fontSize: {
            xs: ".75rem",
            sm: ".875rem",
            tiny: ".875rem",
            base: "1rem",
            lg: "1.125rem",
            xl: "1.25rem",
            "2xl": "1.5rem",
            "3xl": "1.875rem",
            "4xl": "2.25rem",
            "5xl": "3rem",
            "6xl": "4rem",
            "7xl": "5rem",
            "8xl": "6rem",
            "9xl": "8rem",
            "10xl": "10rem",
        },
        extend: {
            boxShadow: {
                blogCardWithouthover: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                blogCardWithhover: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
            },
            spacing: {
                '126px': '126px',
            },
            fontFamily: {
                guthen: ["Guthen Bloots Personal Use", "sans-serif"],
            },
            gap: {
                84: "22rem",
                98: "25rem",
                100: "30rem",
                102: "35rem",
                104: "40rem",
            },
            backgroundImage: {
                workspace_1:
                    "url('https://ik.imagekit.io/jason7531/syncrow/workspace/Mask_Group_50_QuJ0l5adg.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642306003982')",
                workspace_2:
                    "url('https://ik.imagekit.io/jason7531/syncrow/workspace/Mask_Group_42_VRYA6BYSv.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642306939750')",
                workspace_3:
                    "url('https://ik.imagekit.io/jason7531/syncrow/workspace/Mask_Group_43_bjAKIb0cBl.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642312369192')",
                workspace_4:
                    "url('https://ik.imagekit.io/jason7531/syncrow/workspace/Mask_Group_44_bpM5Aciuc.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642316371348')",
                workspace_5:
                    "url('https://ik.imagekit.io/jason7531/syncrow/workspace/Mask_Group_45_Rr1ou50NpKU.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642318179428')",
                workspace_6:
                    "url('https://ik.imagekit.io/jason7531/syncrow/workspace/Mask_Group_46_R2D1QQOqF.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642319905785')",
                workspace_7:
                    "url('https://ik.imagekit.io/jason7531/syncrow/workspace/Mask_Group_47_rMdyIRhp2A.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642320226876')",
                workspace_8:
                    "url('https://ik.imagekit.io/jason7531/syncrow/workspace/Mask_Group_48_B6OhyJ-5d.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642320410626')",
                workspace_9:
                    "url('https://ik.imagekit.io/jason7531/syncrow/workspace/Lighting_Bulb_amid_Fused_nYDKTL9THOe.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1642339846924')",
                apartment_1:
                    "url('https://ik.imagekit.io/jason7531/syncrow/apartment/Mask_Group_49_PjCi1NLBmQB.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642347300715')",
                apartment_2:
                    "url('https://ik.imagekit.io/jason7531/syncrow/apartment/Mask_Group_36_gRgB4U0Ig.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642347292009')",
                apartment_3:
                    "url('https://ik.imagekit.io/jason7531/syncrow/apartment/5g-communication-technology-internet-network_v5PyaFsPa.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642347304198')",
                apartment_4:
                    "url('https://ik.imagekit.io/jason7531/syncrow/apartment/Mask_Group_37_Pg2RKOLHHsG.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642347303754')",
                apartment_5:
                    "url('https://ik.imagekit.io/jason7531/syncrow/apartment/Mask_Group_38_YkDada1kw.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642347298789')",
                apartment_6:
                    "url('https://ik.imagekit.io/jason7531/syncrow/apartment/smart-home-lighting-system-controller_x7SU4zy8U.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642347306630')",
                apartment_7:
                    "url('https://ik.imagekit.io/jason7531/syncrow/apartment/Mask_Group_39_yq96ptCn5Jx.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642347308333')",
                apartment_8:
                    "url('https://ik.imagekit.io/jason7531/syncrow/apartment/Mask_Group_40_upqS14OfT.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642347302402')",
                apartment_9:
                    "url('https://ik.imagekit.io/jason7531/syncrow/apartment/Mask_Group_41_uF4m5GNyU.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642347305686')",
                home_1: "url('https://ik.imagekit.io/jason7531/syncrow/Home/Mask_Group_27_TezB78a3nEO.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642483799868')",
                home_2: "url('https://ik.imagekit.io/jason7531/syncrow/Home/Mask_Group_28__1__Ms49OGeSv.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642488250774')",
                home_con1:
                    "url('https://ik.imagekit.io/jason7531/syncrow/Home/convenience/Mask_Group_30_4lPNGOKHb.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642514003998')",
                home_con2:
                    "url('https://ik.imagekit.io/jason7531/syncrow/Home/convenience/shutterstock_767977975_nYAtAD5w8.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642514002867')",
                efficiency:
                    "url('https://ik.imagekit.io/jason7531/syncrow/Efficiency/Mask_Group_21_U2aHum1fM.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642572332814')",
                accessibility:
                    "url('https://ik.imagekit.io/jason7531/syncrow/Home/accessibility/Mask_Group_34_js1mHbmsOmB.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642597766226')",
                home_sec1:
                    "url('https://ik.imagekit.io/jason7531/syncrow/Home/security/Mask_Group_31_MrQ467-Bn.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642746549500')",
                home_sec2:
                    "url('https://ik.imagekit.io/jason7531/syncrow/Home/security/Mask_Group_33_4-10_kuIY8P.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642746549785')",
                landing:
                    "url('https://ik.imagekit.io/jason7531/syncrow/Landing/person-looking-smartphone-with-smart-home-lights-app-sitting-kitchen-house-with-automation__ORwS812u.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642754866946')",
                about_1:
                    "url('https://ik.imagekit.io/jason7531/syncrow/About/about1_FwjC-u43s.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642781475801')",
                about_2:
                    "url('https://ik.imagekit.io/jason7531/syncrow/About/roboArm_lpkwpTfmu.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642780739863')",
                smartCity:
                    "url('https://ik.imagekit.io/jason7531/syncrow/IOT/Mask_Group_51_LM17FDar9ua.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642928905203')",
                industry:
                    "url('https://ik.imagekit.io/jason7531/syncrow/IOT/businessman-pointing-his-presentation-futuristic-digital-screen_Z9C9GNMp6nZ.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1642943019514')",
                home_conv_hero: "url('/home/convenience_hero.png')",
            },
            height: {
                6: "26px",
                98: "25rem",
                99: "27rem",
                100: "30rem",
                101: "31rem",
                102: "35rem",
                103: "39rem",
                104: "40rem",
                106: "45rem",
                107: "47rem",
                108: "50rem",
                110: "55rem",
                112: "60rem",
                114: "65rem",
                116: "70rem",
                118: "75rem",
                120: "80rem",
                130: "90rem",
            },
            width: {
                6: "26px",
                98: "25rem",
                99: "27.1rem",
                100: "30rem",
                101: "454px",
                102: "35rem",
                104: "40rem",
                106: "45rem",
                107: "47rem",
                108: "50rem",
                110: "55rem",
                112: "60rem",
                114: "65rem",
                116: "70rem",
                118: "75rem",
                120: "80rem",
                125: "85rem",
                130: "90rem",
                135: "95rem",
            },
            lineHeight: {
                'leading-11': '2px',
            },
            colors: {
                "regal-blue": "#243c5a",
                default: "#023DFE",
            },
            screens: {
                xs: "370px",
                minimum: "390px",
                extrasmall: "410px",
                small: "500px",
                tablet: "640px",
                laptop: "1024px",
                middle: "1135px",
                medium: "1422px",
                mediumLarge: "1530px",
                big: "1794px",
                desktop: "1920px",
            },
        },
    },
    plugins: [],
};