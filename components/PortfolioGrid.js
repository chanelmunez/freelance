import React from 'react';
import Image from 'next/image';
import PortfolioModal from './PortfolioModal';

const portfolioItems = [
  {
    id: 1,
    title: "Grooveshark",
    imageSrc: "/assets/img/portfolio/grooveshark.png",
    description: "A music streaming service"
  },
  {
    id: 2,
    title: "Project 2",
    imageSrc: "/assets/img/portfolio/project2.png",
    description: "Project 2 description"
  },
  // Add more portfolio items here
];

const PortfolioGrid = () => {
  return (
    <>
      <div className="row justify-content-center">
        {portfolioItems.map((item) => (
          <div key={item.id} className="col-md-6 col-lg-4 mb-5">
            <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={`#portfolioModal${item.id}`}>
              <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                <div className="portfolio-item-caption-content text-center text-white">
                  <i className="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <Image
                className="img-fluid"
                src={item.imageSrc}
                alt={item.title}
                width={400}
                height={300}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Modals */}
      {portfolioItems.map((item) => (
        <PortfolioModal
          key={item.id}
          id={item.id}
          title={item.title}
          imageSrc={item.imageSrc}
          description={item.description}
        />
      ))}
    </>
  );
};

export default PortfolioGrid;
