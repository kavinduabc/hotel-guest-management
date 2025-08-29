// src/Alert/AlertDemo.tsx
import { CheckCircle2, AlertCircle, Info } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

type AlertType = "success" | "error" | "info"

interface AlertDemoProps {
  alertTitle: string
  alertDescription?: string
  type?: AlertType
  onClose?: () => void
}

export function AlertDemo({
  alertTitle,
  alertDescription,
  type = "success",
  onClose,
}: AlertDemoProps) {
  const Icon =
    type === "success" ? CheckCircle2 : type === "error" ? AlertCircle : Info

  // shadcn/ui: use `variant="destructive"` for errors
  const variant = type === "error" ? "destructive" : undefined

  return (
    <div className="grid w-full max-w-xl items-start gap-3">
      <Alert variant={variant} className="flex items-start gap-3 text-red-700">
        <Icon className="h-5 w-5 mt-0.5" />
        <div className="flex-1 text-red-500">
          <AlertTitle>{alertTitle}</AlertTitle>
          {alertDescription && (
            <AlertDescription>{alertDescription}</AlertDescription>
          )}
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-muted-foreground hover:underline "
          >
            Close
          </button>
        )}
      </Alert>
    </div>
  )
}
