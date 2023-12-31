import { Spinner } from "@nextui-org/react"

const SpinnerLoading = () => {
  return (
    <Spinner
      label="Loading..."
      labelColor="success"
      classNames={{
        base: "fixed z-50",
        circle1: "border-l-green-light-lime border-b-green-light-lime",
        circle2: "border-l-green-light-lime border-b-green-light-lime",
      }}
    />
  )
}

export default SpinnerLoading
