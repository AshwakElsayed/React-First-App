import React from 'react';
import cabin from '../imgs/cabin.png';
import circus from '../imgs/circus.png';
import game from '../imgs/game.png';
import safe from '../imgs/safe.png';
import submarine from '../imgs/submarine.png';
import cake from '../imgs/cake.png';



export default function Portfolio() {
    
    function display(index) {
        let imgList = Array.from(document.querySelectorAll('.portfolio-item img'));
        let lightBoxContainer = document.getElementById('lightBoxContainer');
        lightBoxContainer.classList.remove('d-none');
        let imgSrc = imgList[index].getAttribute('src');
        document.querySelector('.img-zzz').style.backgroundImage = `url(${imgSrc})`;
        document.getElementById('img-name').innerText= imgList[index].getAttribute('name');             
    }


    function close() {
        document.getElementById('lightBoxContainer').classList.add('d-none');
        
    }
    // document.addEventListener('keydown', function(e) {
    //       if (e.code == 'Escape') {
    //         close();
    //     }
    // })
     
    

    return <>
        <section className="PORTFOLIO container py-5">
            <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0 pt-md-5">Portfolio</h2>
            <div className="lines ">
                <div className="line"></div>
                <div className="star"><i className="fas fa-star"></i></div>
                <div className="line"></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mb-2">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal1" onClick={()=> display(0)}>
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white" ><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={cabin} alt="" name='LOG CABIN' />
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-2" onClick={()=> display(1)} >
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal2">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={cake} alt="" name='TASTY CAKE'/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-2" onClick={()=> display(2)}>
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal3">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={circus} alt="" name='CIRCUS TENT'/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-2" onClick={()=> display(3)}>
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal4">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={game} alt="" name='CONTROLLER' />
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-2" onClick={()=> display(4)}>
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal5">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={safe} alt="" name='LOCKED SAFE' />
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-2" onClick={()=> display(5)}>
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal6">
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div>
                        <img className="img-fluid" src={submarine} alt="" name='SUBMARINE'/>
                    </div>
                </div>

            </div>
        </section>
        <div id="lightBoxContainer" className="text-center d-none ">
        <div id="lightbox" className='my-md-5'>
        <i id="closebtn" className="fa-solid fa-xmark" onClick={close}></i>
           <div className='mt-md-3'>
            <h2 id='img-name'>Protfolio</h2>
           </div>
           <div className="lines ">
                <div className="line"></div>
                <div className="star"><i className="fas fa-star"></i></div>
                <div className="line"></div>
            </div>
           <div className='img-zzz my-md-3'></div>
           <p className='px-5 my-md-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, mollitia!</p>
            <button type="button" className="btn btn-primary btn-sm my-md-3 p-2" onClick={close}> <i className='fa-solid fa-xmark text-white'></i> Close Window</button>

        </div>

        </div>
       
    </>
}
