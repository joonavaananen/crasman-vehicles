import styled from 'styled-components';
import Image from 'next/image';
import { Picture } from '../common';

const VehicleCard = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
  border: 0.1rem solid ${({ theme }) => theme.color.vader};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  height: 100%;
  padding: 1.6rem;
`;

const Title = styled.h2`
  margin: 0;
  color: ${({ theme }) => theme.color.maul};
  font-size: 2rem;
`;

const Price = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

const SpecificationContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const Specification = styled.span`
  color: ${({ theme }) => theme.color.vader};
`;

const VehicleCardContainer = ({
  make,
  model,
  model_year,
  image,
  kilometrage,
  fuel_type,
  transmission,
  price,
  sizes,
}) => (
  <VehicleCard>
    <Picture aspectRatio={3 / 2}>
      {image?.src && (
        <Image
          src={image.src}
          alt={`${make} ${model}`}
          layout={'fill'}
          sizes={sizes}
          objectFit={'cover'}
          blurDataURL={image.base64}
          placeholder={image.base64 ? 'blur' : 'empty'}
        />
      )}
    </Picture>
    <Container>
      <Title>{`${make} ${model}`}</Title>
      <Price>{price}</Price>
      <SpecificationContainer>
        <Specification>{model_year}</Specification>
        <Specification>{kilometrage}</Specification>
        <Specification>{fuel_type}</Specification>
        <Specification>{transmission}</Specification>
      </SpecificationContainer>
    </Container>
  </VehicleCard>
);

export { VehicleCardContainer as VehicleCard };
