"use client";

import {
  Modal,
  ModalHeader,
  ModalContent,
  ModalFooter,
  Button,
  ModalBody,
} from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import Profile from "@/public/profile.png";

type ConfirmationModalProps = {
  isOpen: boolean;
  onConfirm: () => void;
  onClose: () => void;
  isSubmitting: boolean;
  position: any[];
  selectedCandidates: Record<string, string>;
};

const VotingSummaryModal = ({
  isOpen,
  onConfirm,
  onClose,
  isSubmitting,
  position,
  selectedCandidates,
}: ConfirmationModalProps) => {
  return (
    <Modal
      backdrop="blur"
      isOpen={isOpen}
      size="xl"
      scrollBehavior="outside"
      hideCloseButton={true}
      motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
    >
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1 items-center justify-center">
          Voting Summary
        </ModalHeader>
        <ModalBody className="flex flex-col items-center justify-center h-full">
          {position.map((pos, positionIndex) => (
            <div key={positionIndex} className="flex flex-col items-center">
              <h1 className="font-bold text-center text-lg">{pos.name}</h1>
              {selectedCandidates[positionIndex] !== undefined && (
                <div className="flex flex-col items-center">
                  {typeof selectedCandidates[positionIndex] === "number" && (
                    <>
                      <div className="flex flex-col items-center">
                        <Image
                          src={
                            pos.candidates[selectedCandidates[positionIndex]]
                              .image || Profile
                          }
                          alt={
                            pos.candidates[selectedCandidates[positionIndex]]
                              .name
                          }
                          width={100}
                          height={100}
                          className="rounded-full"
                        />
                        <span>
                          {
                            pos.candidates[selectedCandidates[positionIndex]]
                              .name
                          }
                        </span>
                      </div>
                    </>
                  )}
                  {pos.candidates.length === 1 &&
                    (selectedCandidates[positionIndex] === "yes" ||
                      selectedCandidates[positionIndex] === "no") && (
                      <>
                        <div className="flex flex-col items-center">
                          <Image
                            src={pos.candidates[0].image}
                            alt={pos.candidates[0].name}
                            width={100}
                            height={100}
                            className="rounded-full"
                          />
                          <span>{pos.candidates[0].name}</span>
                          <span>
                            {" "}
                            - {selectedCandidates[positionIndex].toUpperCase()}
                          </span>
                        </div>
                      </>
                    )}
                </div>
              )}
            </div>
          ))}
        </ModalBody>

        <ModalFooter>
          <Button color="danger" onClick={onClose}>
            Cancel
          </Button>
          <Button isLoading={isSubmitting} color="primary" onClick={onConfirm}>
            Confirm
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default VotingSummaryModal;
