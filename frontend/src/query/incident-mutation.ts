import { IncidentService } from "@/service/incident.service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useIncidentMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({
      tags,
      title,
      description,
    }: {
      title: string;
      description: string;
      tags: string;
    }) => {
      return IncidentService.createIncident({
        title,
        description,
        tags: tags.split(",").map((tag) => tag.trim()),
      });
    },
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["incidents"] });
    },
  });
};
