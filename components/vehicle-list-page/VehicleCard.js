import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  Picture,
  CardContent,
  SecondaryHeading,
  Anchor,
  Price,
  Specifications,
} from '../common';

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
  <Card as={'article'}>
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
    <CardContent>
      {url ? (
        <Link href={url} passHref>
          <Anchor overflow>
            <SecondaryHeading>{`${make} ${model}`}</SecondaryHeading>
          </Anchor>
        </Link>
      ) : (
        <SecondaryHeading>{`${make} ${model}`}</SecondaryHeading>
      )}
      <Price>{price}</Price>
      <Specifications
        specifications={[model_year, kilometrage, fuel_type, transmission]}
      />
    </CardContent>
  </Card>
);

export { VehicleCard };
