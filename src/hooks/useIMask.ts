import { useEffect, useRef } from 'react';
import IMask from 'imask';

interface UseIMaskProps {
  mask: string;
  onChange?: (value: string) => void;
  onAccept?: (value: string) => void;
}

export const useIMask = ({ mask, onChange, onAccept }: UseIMaskProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const maskRef = useRef<IMask.InputMask<IMask.AnyMaskedOptions>>();

  useEffect(() => {
    if (!inputRef.current) return;

    maskRef.current = IMask(inputRef.current, {
      mask,
    });

    const handleComplete = () => {
      if (onChange && maskRef.current) {
        onChange(maskRef.current.value);
      }
    };

    const handleAccept = () => {
      if (onAccept && maskRef.current) {
        onAccept(maskRef.current.value);
      }
    };

    if (onChange) {
      maskRef.current.on('complete', handleComplete);
    }

    if (onAccept) {
      maskRef.current.on('accept', handleAccept);
    }

    return () => {
      if (maskRef.current) {
        if (onChange) {
          maskRef.current.off('complete', handleComplete);
        }
        if (onAccept) {
          maskRef.current.off('accept', handleAccept);
        }
        maskRef.current.destroy();
      }
    };
  }, [mask, onChange, onAccept]);

  return inputRef;
};