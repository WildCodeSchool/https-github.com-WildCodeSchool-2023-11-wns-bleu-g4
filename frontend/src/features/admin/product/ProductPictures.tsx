import { Product_Picture } from "@/graphql/generated/schema";
import { PlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import ProductPictureAddModal from "./modal/ProductPictureAddModal";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDeleteProduct_PictureMutation } from "@/graphql/ProductPicture/generated/DeleteProduct_picture.generated";
import { GetProductByIdDocument } from "@/graphql/Product/generated/getProductById.generated";

export default function ProductPictures({ product }: { product: any }) {
    const [deletePicture] = useDeleteProduct_PictureMutation();
    const [productPictureModal, setProductPictureModal] = useState(false);
    const toggleAddPictureModal = () => setProductPictureModal(!productPictureModal);

    const productId = product?.id;

    const handleDeletePicture = async (pictureId: number) => {
        deletePicture({
            variables: { deleteProductPictureId: pictureId },
            refetchQueries: [{ query: GetProductByIdDocument, variables: { productId } }],
        }).catch(console.error);
    };

    return (
        <div className="bg-[#F5F5F5] rounded w-full flex flex-col gap-3 p-4 h-fit">
            <div className="flex gap-4 items-center justify-between">
                <b>Pictures</b>
                <button
                    type="button"
                    className="flex gap-1 items-center bg-accent font-semibold rounded-md text-white px-3 py-1 text-sm"
                    onClick={toggleAddPictureModal}
                >
                    <PlusIcon className="h-5 w-5" />
                    Add Picture
                </button>
                {productPictureModal && (
                    <ProductPictureAddModal
                        isOpen={productPictureModal}
                        onClose={toggleAddPictureModal}
                        product={product}
                    />
                )}
            </div>
            <div className="flex gap-4">
                {
                    product?.pictures.length === 0 && (
                        <span className="italic">No pictures available</span>
                    )
                }
                {product?.pictures.map((picture: Product_Picture) => (
                    <div key={picture.id} className="relative h-36 max-w-52 rounded aspect-auto">
                        <img src={picture.thumbnail} alt={picture.alt} className="h-full w-full object-cover rounded object-center" />
                        <button
                            type="button"
                            className="absolute top-1 right-1 bg-[#D23732]/50 rounded-md p-1"
                            aria-label="Delete button"
                            onClick={() => handleDeletePicture(picture.id)}
                        >
                            <XMarkIcon className="h-5 w-5 text-white" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};
