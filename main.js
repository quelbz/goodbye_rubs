let carts = document.querySelectorAll('.buy-btn');

let products = [
    {
        brand: "Vans",
        name: "SK8-Hi",
        price: 75,
        qtyInCart: 0,
        tag: "vans1"
    },
    {
        brand: 'Vans',
        name: 'Checkerboard Classic Slip-On',
        price: 100,
        qtyInCart: 0,
        tag: "vans2"
    },
    {
        brand: 'Vans',
        name: 'Authentic',
        price: 25,
        qtyInCart: 0,
        tag: "vans3"
    },
    {
        brand: 'Vans',
        name: 'Old Skool',
        price: 10,
        qtyInCart: 0,
        tag: "vans4"
    },
    {
        brand: 'Vans',
        name: 'Vans X Noon Goons Aut. 44 DX',
        price: 92.3,
        qtyInCart: 0,
        tag: "vans5"
    },
    {
        brand: 'Vans',
        name: 'Team Wellness Sk8-Hi',
        price: 100,
        qtyInCart: 0,
        tag: "vans6"
    },
    {
        brand: 'Vans',
        name: 'Authentic Brown',
        price: 25,
        qtyInCart: 0,
        tag: "vans7"
    },
    {
        brand: 'Vans',
        name: 'CB Classic Slip-On (Brown/White)',
        price: 10,
        qtyInCart: 0,
        tag: "vans8"
    },
    {
        brand: 'Vans',
        name: 'Textured Classic Slip-On',
        price: 92.3,
        qtyInCart: 0,
        tag: "vans9"
    },
    {
        brand: 'Vans',
        name: 'After Dark ComfyCush Old Skool',
        price: 100,
        qtyInCart: 0,
        tag: "vans10"
    },
    {
        brand: 'Vans',
        name: 'Old Skool Overt CC',
        price: 25,
        qtyInCart: 0,
        tag: "vans11"
    },
    {
        brand: 'Vans',
        name: 'CB Classic Slip-On (Orange)',
        price: 10,
        qtyInCart: 0,
        tag: "vans12"
    },
    {
        brand: 'Vans',
        name: 'Vintage Pop Old Skool',
        price: 92.3,
        qtyInCart: 0,
        tag: "vans13"
    },
    {
        brand: 'Vans',
        name: 'Textured Sk8-Hi',
        price: 100,
        qtyInCart: 0,
        tag: "vans14"
    },
    {
        brand: 'Vans',
        name: 'Vintage Pop Sk8-Hi',
        price: 25,
        qtyInCart: 0,
        tag: "vans15"
    },
    {
        brand: 'Vans',
        name: 'Old Skool Overt CC',
        price: 10,
        qtyInCart: 0,
        tag: "vans16"
    },
    {
        brand: 'Vans',
        name: 'Pop Color Old Skool Overt CC',
        price: 92.3,
        qtyInCart: 0,
        tag: "vans17"
    },
    {
        brand: 'Vans',
        name: 'Old Skool (Brown)',
        price: 100,
        qtyInCart: 0,
        tag: "vans18"
    },
    {
        brand: 'Vans',
        name: 'Anaheim Factory Authentic 44 DX',
        price: 25,
        qtyInCart: 0,
        tag: "vans19"
    },
    {
        brand: 'Vans',
        name: 'Classic Slip-On (Triple White)',
        price: 10,
        qtyInCart: 0,
        tag: "vans20"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Chron 2 Slip',
        price: 75,
        qtyInCart: 0,
        tag: "nike_sb_chron_2_slip"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Force 58',
        price: 100,
        qtyInCart: 0,
        tag: "nike_sb_force_58"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Ishod Wair',
        price: 25,
        qtyInCart: 0,
        tag: "nike_sb_ishod_wair"
    }, /* here */
    {
        brand: 'Nike',
        name: 'Nike SB Pogo',
        price: 10,
        qtyInCart: 0,
        tag: "nike_sb_pogo"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Zoom Blazer Low',
        price: 92.3,
        qtyInCart: 0,
        tag: "nike_sb_zoom_blazer_low"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Zoom Blazer Mid',
        price: 100,
        qtyInCart: 0,
        tag: "nike_sb_zoom_blazer_mid"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Bruin Hi ISO',
        price: 25,
        qtyInCart: 0,
        tag: "nike1_sb_bruin_hi_iso"
    },
    {
        brand: 'Nike',
        name: 'Nike SB ZOOM Blazer Mid Premium Plus',
        price: 10,
        qtyInCart: 0,
        tag: "nike2_sb_zoom_blazer_mid_premium_plus"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Ishod Wair Premium',
        price: 92.3,
        qtyInCart: 0,
        tag: "nike3_sb_ishod_wair_premium"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Zoom Blazer Mid Premium',
        price: 100,
        qtyInCart: 0,
        tag: "nike4_sb_zoom_blazer_mid_premium"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Pogo Premium',
        price: 25,
        qtyInCart: 0,
        tag: "nike5_sb_pogo_premium"
    },
    {
        brand: 'Nike',
        name: 'Nike Bruin Premium',
        price: 10,
        qtyInCart: 0,
        tag: "nike6_bruin_premium"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Blazer Court Mid',
        price: 92.3,
        qtyInCart: 0,
        tag: "nike7_sb_blazer_court_mid_prm"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Blazer Low-Pro GT Premium',
        price: 100,
        qtyInCart: 0,
        tag: "nike8_sb_blazer_lowpro_gt_premium"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Chron 2 Canvas',
        price: 25,
        qtyInCart: 0,
        tag: "nike9_sb_chron_2_canvas"
    },
    {
        brand: 'Nike',
        name: 'Nike Blazer Zoom PRM',
        price: 10,
        qtyInCart: 0,
        tag: "nike10_blazer_zoom_prm"
    },
    {
        brand: 'Nike',
        name: 'Nike Ishod Blazer PRM',
        price: 92.3,
        qtyInCart: 0,
        tag: "nike11_ishod_blazer_prm"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Dunk High Pro',
        price: 100,
        qtyInCart: 0,
        tag: "nike12_sb_dunk_high-pro"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Bruin React',
        price: 25,
        qtyInCart: 0,
        tag: "nike13_sb_bruin_react"
    },
    {
        brand: 'Nike',
        name: 'Nike SB Shane',
        price: 10,
        qtyInCart: 0,
        tag: "nike15_SB_Shane"
    },
    {
        brand: 'Nike',
        name: 'DC Manteca Orange',
        price: 22,
        qtyInCart: 0,
        tag: "dc_manteca_orange"
    },
    {
        brand: 'Nike',
        name: 'AW Hi Shoes BB2',
        price: 49,
        qtyInCart: 0,
        tag: "dc10_aw_manual_hi_shoes_bb2"
    },
    {
        brand: 'Nike',
        name: 'AW Hi Shoes BB2 XKWR',
        price: 25,
        qtyInCart: 0,
        tag: "dc10_aw_manual_hi_shoes_xkwr"
    },
    {
        brand: 'Nike',
        name: 'Anvil Shoes KSO',
        price: 52,
        qtyInCart: 0,
        tag: "dc13_anvil_shoes_kso"
    },
    {
        brand: 'Nike',
        name: 'Metric Black',
        price: 43,
        qtyInCart: 0,
        tag: "dc3_metric_black"
    },
    {
        brand: 'Nike',
        name: 'Manteca 4',
        price: 46,
        qtyInCart: 0,
        tag: "dc4_manteca4"
    },
    {
        brand: 'Nike',
        name: 'Manual Hi Shoes Desert',
        price: 25,
        qtyInCart: 0,
        tag: "dc6_aw_manual_hi_shoes_desert"
    },
    {
        brand: 'Nike',
        name: 'Anvil Shoes',
        price: 17,
        qtyInCart: 0,
        tag: "dc7_anvil_shoes"
    },
    {
        brand: 'Nike',
        name: 'Anvil Mens DNY',
        price: 24.3,
        qtyInCart: 0,
        tag: "dc9_anvil_mens_dny"
    },
    {
        brand: 'Nike',
        name: 'AW Manual Shoes Classic',
        price: 100,
        qtyInCart: 0,
        tag: "dc5_aw_manual_hi_shoes"
    },
    {
        brand: 'Nike',
        name: 'Manual Hi Shoes ZXC',
        price: 25,
        qtyInCart: 0,
        tag: "dc10_aw_manual_hi_shoes_xkwr"
    },
    {
        brand: 'Nike',
        name: 'Anvil Mens Frost',
        price: 10,
        qtyInCart: 0,
        tag: "dc8_anvil_mens"
    },
    {
        brand: 'Nike',
        name: 'CONS One Star Pro Vintage',
        price: 75,
        qtyInCart: 0,
        tag: "con1_onestar_pro_vintage"
    },
    {
        brand: 'Nike',
        name: 'CONS Louie Lopez Pro Mid',
        price: 75,
        qtyInCart: 0,
        tag: "con2_louie_lopez_pro_mid"
    },
    {
        brand: 'Nike',
        name: 'CONS Louie Lopez Pro',
        price: 75,
        qtyInCart: 0,
        tag: "con3_louie_lopez_pro"
    },
    {
        brand: 'Nike',
        name: 'CONS One Star Pro Cordura Canvas',
        price: 75,
        qtyInCart: 0,
        tag: "con4_onestar_pro_cordura_canvas"
    },
    {
        brand: 'Nike',
        name: 'CONS One Star Pro Cordura Canvas White',
        price: 75,
        qtyInCart: 0,
        tag: "con5_onestar_pro_cordura_canvas_white"
    },
    {
        brand: 'Nike',
        name: 'CONS Chuck Taylor All-Star Pro Cordura Canvas',
        price: 70,
        qtyInCart: 0,
        tag: "con6_chuck_taylor_all_star_pro_cordura_canvas"
    },
    {
        brand: 'Nike',
        name: 'CONS One Star Pro Suede',
        price: 75,
        qtyInCart: 0,
        tag: "con7_one_star_pro_suede"
    },
    {
        brand: 'Nike',
        name: 'CONS PL Vulc Pro',
        price: 75,
        qtyInCart: 0,
        tag: "con8_cons_pl_vulc_pro"
    },
    {
        brand: 'Nike',
        name: 'Chuck Taylor All-Star Pro Mid Renew',
        price: 70,
        qtyInCart: 0,
        tag: "con9_chuck_taylor_allstar_pro_mid_renew_70"
    },
    {
        brand: 'Nike',
        name: 'Fastbreak Pro Sage',
        price: 85,
        qtyInCart: 0,
        tag: "con10_cons_fastbreak_pro_sage_85"
    },
    {
        brand: 'Nike',
        name: 'PL Vulc Pro Suede',
        price: 80,
        qtyInCart: 0,
        tag: "con11_cons_pl_vulc_pro_suede"
    },
    {
        brand: 'Nike',
        name: 'Chuck 70 Vintage Canvas',
        price: 80,
        qtyInCart: 0,
        tag: "con12_cons_chuck_70_vintage_canvass_80"
    },
    {
        brand: 'Nike',
        name: 'Chuck 70 Vintage Canvas Pro',
        price: 85,
        qtyInCart: 0,
        tag: "con13_cons_chuck_70_vintage_canvas_85"
    },
    {
        brand: 'Nike',
        name: 'Fastbreak Pro',
        price: 80,
        qtyInCart: 0,
        tag: "con14_cons_fastbreak_pro_80"
    },
    {
        brand: 'Nike',
        name: 'Nora Shoes',
        price: 85,
        qtyInCart: 0,
        tag: "ad1_nora_shoes"
    },
    {
        brand: 'Nike',
        name: 'VULC Raid3r SB Shoes',
        price: 80,
        qtyInCart: 0,
        tag: "ad2_vulc_raid3r_sb_shoes_80"
    },
    {
        brand: 'Nike',
        name: 'Daily 3.0 Skateboarding Shoes',
        price: 90,
        qtyInCart: 0,
        tag: "ad3_daily_3_pt_0_90"
    },
    {
        brand: 'Nike',
        name: 'VL Court 2.0',
        price: 80,
        qtyInCart: 0,
        tag: "ad4_vl_court_2pt0_80"
    },
    {
        brand: 'Nike',
        name: 'Daily 3.0',
        price: 85,
        qtyInCart: 0,
        tag: "ad5_daily_3pt0_85"
    },
    {
        brand: 'Nike',
        name: 'BRAVADA',
        price: 90,
        qtyInCart: 0,
        tag: "ad6_bravada_90"
    },
    {
        brand: 'Nike',
        name: 'Futurevulc Lifestyle Shoes',
        price: 100,
        qtyInCart: 0,
        tag: "ad7_futurevulc_lifestyle_sb_100"
    },
    {
        brand: 'Nike',
        name: 'Lifestyle SB Suede',
        price: 100,
        qtyInCart: 0,
        tag: "ad8_lifestyle_sb_suede_100"
    },
    {
        brand: 'Nike',
        name: 'FA Experiment 2',
        price: 100,
        qtyInCart: 0,
        tag: "ad10_fa_experiment2_100"
    }, /* here */
    {
        brand: 'Nike',
        name: 'VULC Raid3r SB Slip-On Canvas',
        price: 105,
        qtyInCart: 0,
        tag: "ad11_vulc raid3r_sb_Slip-On_canvas_105"
    },
    {
        brand: 'Nike',
        name: 'FA Experiment 1',
        price: 105,
        qtyInCart: 0,
        tag: "ad12_fa_experiment_1_105"
    }
        
];

for (let i = 0; i < carts.length; i++) {
    carts[i].addEventListener('click',() => {
        cartQuantity (products[i]);
        totalCostForProduct (products[i]);
    })
}

// for incrementing of cart items count
function cartQuantity (product) {
    //console.log(product);
    let prodQuantity = localStorage.getItem('cartQuantity');
    prodQuantity = parseInt(prodQuantity);

    if (prodQuantity) {
        localStorage.setItem('cartQuantity', prodQuantity + 1);
        document.querySelector('.cart span').textContent = prodQuantity + 1;
    } else {
        localStorage.setItem('cartQuantity', 1);
        document.querySelector('.cart span').textContent = 1;
    }
    setItems(product);
}

// storing product info in local storage
function setItems(product) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    //console.log(cartItems);

    if(cartItems != null){

        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product
            }
        }
        cartItems[product.tag].qtyInCart += 1;
    } else {
        product.qtyInCart = 1;
        cartItems = {
            [product.tag] : product
        }
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

//para di mag zero kahit i refresh
function cartCountNotReset () {
    let prodQuantity = localStorage.getItem("cartQuantity");
    if(prodQuantity) {
        document.getElementsByClassName('.cart span').textContent = prodQuantity;
    }
}

// for product costing
function totalCostForProduct(product) {
    //console.log("The price is " + product.price);
    let costTotal = localStorage.getItem('totalCost');

    if (costTotal != null) {
        costTotal = parseInt(costTotal);
        localStorage.setItem("totalCost", costTotal + product.price);
    } else {
        localStorage.setItem("totalCost", product.price)
    }
}

function displayCart(){
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".product-container");
    let costTotal = localStorage.getItem('totalCost');
    //console.log(cartItems);
    if(cartItems && productContainer){
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="container col-sm">
            <table class="table text-center">    
                <tbody>
                    <tr class="text-center">
                        <td class="col-md text-center pt-5"><button class="btn btn-danger">Remove</button></td>
                        <td class="col-md-3 text-center"><img src="./img/${item.tag}.jpg" class="img-thumbnail"></td>
                        <td class="col-md-3 text-center">${item.name}</td>
                        <td class="col-md-3 text-center">
                            ${item.qtyInCart}
                        </td>
                        <td class="col-md-3 text-center totalPrice">$${item.price * item.qtyInCart}</td>
                    </tr>
                </tbody>
            </table>
            </div>
            `
        })
    } else if (cartItems == null) {
        costTotal = 0.00;
        productContainer.innerHTML = `
            <div class="container noItems text-center mt-5 mb-5">
                <h3>No Items In Cart!</h3>
            </div>
        `
    }

        productContainer.innerHTML += `
            <div class="totalCostOfItem text-center">
                <h4 class="titleofCost">
                    Total Cost:
                </h4>
                    <h4 class="valueCost">
                        $${costTotal}
                    </h4>
                <button class="btn btn-primary mb-3">Check Out</button>
            </div>
       `
    //console.log(cartItems);
};


// this code execute on the initial load
displayCart();
cartCountNotReset();


