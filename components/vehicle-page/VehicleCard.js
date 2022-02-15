import styled from 'styled-components';
import Image from 'next/image';
import {
  Card,
  CardContent,
  PrimaryHeading,
  Price,
  Specifications,
  Picture,
} from '../common';

const StyledCard = styled(Card)`
  flex-grow: 1;
`;

const StyledPicture = styled(Picture)`
  flex-grow: 1;
`;

const VehicleCard = ({
  make,
  model,
  model_year,
  image,
  kilometrage,
  fuel_type,
  transmission,
  price,
  url,
  sizes,
}) => (
  <StyledCard>
    <CardContent>
      <PrimaryHeading>{`${make} ${model}`}</PrimaryHeading>
      <Price>{price}</Price>
      <Specifications
        specifications={[model_year, kilometrage, fuel_type, transmission]}
      />
    </CardContent>
    <StyledPicture>
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
    </StyledPicture>
  </StyledCard>
);

export { VehicleCard };
