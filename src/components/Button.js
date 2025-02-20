import { Button } from "@heroui/react";

function ShadowButton({variant, text, onClick, color}) {
    return <Button variant={variant} onPress={onClick} color={color}>{text}</Button>;
}

export default ShadowButton;